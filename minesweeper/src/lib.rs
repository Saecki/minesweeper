use std::fmt::Display;
use std::time::Duration;
use instant::Instant;

use egui::{
    Align, Align2, Button, Color32, ComboBox, FontId, Key, Layout, PointerButton, Pos2, Rect,
    RichText, Sense, Stroke, TextStyle, Ui, Vec2,
};
use rand::Rng;

const EASY_SETTINGS: GameSettings = GameSettings {
    width: 20,
    height: 14,
    probability_range: 0.15..0.18,
};
const MEDIUM_SETTINGS: GameSettings = GameSettings {
    width: 30,
    height: 18,
    probability_range: 0.17..0.20,
};
const HARD_SETTINGS: GameSettings = GameSettings {
    width: 40,
    height: 24,
    probability_range: 0.19..0.22,
};

pub struct Minesweeper {
    game: Game,
    cursor_visible: bool,
    cursor_x: i16,
    cursor_y: i16,
    difficulty: Difficulty,
}

impl Minesweeper {
    pub fn new() -> Self {
        Self {
            game: Game::easy(),
            cursor_visible: false,
            cursor_x: 0,
            cursor_y: 0,
            difficulty: Difficulty::Easy,
        }
    }

    fn new_game(&mut self) {
        self.game = match self.difficulty {
            Difficulty::Easy => Game::easy(),
            Difficulty::Medium => Game::medium(),
            Difficulty::Hard => Game::hard(),
        };
    }

    fn cursor_left(&mut self) {
        self.cursor_visible = true;
        self.cursor_x -= 1;
        if self.cursor_x < 0 {
            self.cursor_x = self.game.width - 1;
        }
    }

    fn cursor_right(&mut self) {
        self.cursor_visible = true;
        self.cursor_x += 1;
        if self.cursor_x >= self.game.width {
            self.cursor_x = 0
        }
    }

    fn cursor_up(&mut self) {
        self.cursor_visible = true;
        self.cursor_y -= 1;
        if self.cursor_y < 0 {
            self.cursor_y = self.game.height - 1;
        }
    }

    fn cursor_down(&mut self) {
        self.cursor_visible = true;
        self.cursor_y += 1;
        if self.cursor_y >= self.game.height {
            self.cursor_y = 0
        }
    }
}

#[derive(Clone, Copy, PartialEq, Eq)]
enum Difficulty {
    Easy,
    Medium,
    Hard,
}

impl Display for Difficulty {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Difficulty::Easy => write!(f, "Easy"),
            Difficulty::Medium => write!(f, "Medium"),
            Difficulty::Hard => write!(f, "Hard"),
        }
    }
}

struct GameSettings {
    width: i16,
    height: i16,
    probability_range: std::ops::Range<f64>,
}

struct Game {
    probability_range: std::ops::Range<f64>,
    play_state: PlayState,
    width: i16,
    height: i16,
    fields: Vec<Field>,
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum PlayState {
    Init,
    Playing(Instant),
    Won(Duration),
    Lost(Duration),
}

impl Game {
    fn easy() -> Self {
        Self::new(EASY_SETTINGS)
    }

    fn medium() -> Self {
        Self::new(MEDIUM_SETTINGS)
    }

    fn hard() -> Self {
        Self::new(HARD_SETTINGS)
    }

    fn new(settings: GameSettings) -> Self {
        let len = (settings.width * settings.height) as usize;
        let mut game = Self {
            probability_range: settings.probability_range,
            play_state: PlayState::Init,
            width: settings.width,
            height: settings.height,
            fields: vec![Field::free(0); len],
        };

        game.gen_board();

        game
    }

    fn clear_board(&mut self) {
        for f in self.fields.iter_mut() {
            *f = Field::free(0);
        }
    }

    fn gen_board(&mut self) {
        let mut rng = rand::thread_rng();
        let mut available_indices = self.fields.len() - 1;

        let min = (self.probability_range.start * available_indices as f64) as u32;
        let max = (self.probability_range.end * available_indices as f64) as u32;
        let num_mines = rng.gen_range(min..max);
        for _i in 0..num_mines {
            let mut available_idx = rng.gen_range(0..available_indices);
            for (actual_index, f) in self.fields.iter_mut().enumerate() {
                if f.state != FieldState::Mine {
                    if available_idx == 0 {
                        f.state = FieldState::Mine;

                        let x = (actual_index % self.width as usize) as i16;
                        let y = (actual_index / self.width as usize) as i16;

                        self.increment_field(x - 1, y - 1);
                        self.increment_field(x - 1, y + 0);
                        self.increment_field(x - 1, y + 1);
                        self.increment_field(x + 0, y - 1);
                        self.increment_field(x + 0, y + 1);
                        self.increment_field(x + 1, y - 1);
                        self.increment_field(x + 1, y + 0);
                        self.increment_field(x + 1, y + 1);
                        break;
                    }
                    available_idx -= 1;
                }
            }

            available_indices -= 1;
        }
    }

    fn increment_field(&mut self, x: i16, y: i16) {
        if self.is_in_bounds(x, y) {
            if let FieldState::Free(neighbors) = &mut self[(x, y)].state {
                *neighbors += 1;
            }
        }
    }

    fn click(&mut self, x: i16, y: i16) {
        if !self.is_in_bounds(x, y) {
            return;
        }

        let first = self.play_state == PlayState::Init;
        loop {
            let field = &mut self[(x, y)];
            if field.show == ShowState::Hint {
                return;
            }

            match field.state {
                FieldState::Free(neighbours) => {
                    if first && neighbours != 0 {
                        self.clear_board();
                        self.gen_board();
                        continue;
                    }

                    if let ShowState::Show = field.show {
                        let num_hinted_mines = self.count_hinted_mine(x - 1, y - 1)
                            + self.count_hinted_mine(x - 1, y + 0)
                            + self.count_hinted_mine(x - 1, y + 1)
                            + self.count_hinted_mine(x + 0, y - 1)
                            + self.count_hinted_mine(x + 0, y + 1)
                            + self.count_hinted_mine(x + 1, y - 1)
                            + self.count_hinted_mine(x + 1, y + 0)
                            + self.count_hinted_mine(x + 1, y + 1);

                        if num_hinted_mines == neighbours {
                            self.show_if_not_hinted(x - 1, y - 1);
                            self.show_if_not_hinted(x - 1, y + 0);
                            self.show_if_not_hinted(x - 1, y + 1);
                            self.show_if_not_hinted(x + 0, y - 1);
                            self.show_if_not_hinted(x + 0, y + 1);
                            self.show_if_not_hinted(x + 1, y - 1);
                            self.show_if_not_hinted(x + 1, y + 0);
                            self.show_if_not_hinted(x + 1, y + 1);
                        }
                    }

                    self.show_neighbors(x, y);
                    self.check_if_won();
                    break;
                }
                FieldState::Mine => {
                    if first {
                        self.clear_board();
                        self.gen_board();
                        continue;
                    }

                    self.lose(x, y);
                    break;
                }
            }
        }

        if first {
            self.play_state = PlayState::Playing(Instant::now());
        }
    }

    fn hint(&mut self, x: i16, y: i16) {
        if !self.is_in_bounds(x, y) {
            return;
        }

        let field = &mut self[(x, y)];
        if field.show == ShowState::Hint {
            field.show = ShowState::Hide;
        } else if field.show == ShowState::Hide {
            field.show = ShowState::Hint;
        }
    }

    fn lose(&mut self, x: i16, y: i16) {
        let PlayState::Playing(start) = self.play_state else {
            return;
        };
        let duration = Instant::now() - start;
        self[(x, y)].show = ShowState::Show;
        self.play_state = PlayState::Lost(duration);
    }

    fn check_if_won(&mut self) {
        for f in self.fields.iter() {
            if let FieldState::Free(_) = f.state {
                if f.show != ShowState::Show {
                    return;
                }
            }
        }

        let PlayState::Playing(start) = self.play_state else {
            return;
        };
        let duration = Instant::now() - start;
        self.play_state = PlayState::Won(duration);
        for f in self.fields.iter_mut() {
            f.show = ShowState::Show;
        }
    }

    fn show_if_not_hinted(&mut self, x: i16, y: i16) {
        if !self.is_in_bounds(x, y) {
            return;
        }

        let field = &mut self[(x, y)];
        if field.show == ShowState::Show || field.show == ShowState::Hint {
            return;
        }

        if let FieldState::Mine = field.state {
            self.lose(x, y);
            return;
        }

        self.show_neighbors(x, y);
    }

    fn show_neighbors(&mut self, x: i16, y: i16) {
        if !self.is_in_bounds(x, y) {
            return;
        }

        let field = &mut self[(x, y)];
        if field.show == ShowState::Show {
            return;
        }

        field.show = ShowState::Show;

        if field.state != FieldState::Free(0) {
            return;
        }

        self.show_neighbors(x - 1, y - 1);
        self.show_neighbors(x - 1, y + 0);
        self.show_neighbors(x - 1, y + 1);
        self.show_neighbors(x + 0, y - 1);
        self.show_neighbors(x + 0, y + 1);
        self.show_neighbors(x + 1, y - 1);
        self.show_neighbors(x + 1, y + 0);
        self.show_neighbors(x + 1, y + 1);
    }

    fn count_hinted_mine(&self, x: i16, y: i16) -> u8 {
        if !self.is_in_bounds(x, y) {
            return 0;
        }

        if self[(x, y)].show == ShowState::Hint {
            return 1;
        }

        0
    }

    fn open_mine_count(&self) -> i32 {
        let mut mines = 0;
        let mut hints = 0;
        for f in self.fields.iter() {
            if let FieldState::Mine = f.state {
                mines += 1;
            }
            if let ShowState::Hint = f.show {
                hints += 1;
            }
        }
        mines - hints
    }

    fn play_duration(&self) -> Duration {
        match self.play_state {
            PlayState::Init => Duration::ZERO,
            PlayState::Playing(start) => Instant::now() - start,
            PlayState::Won(duration) => duration,
            PlayState::Lost(duration) => duration,
        }
    }

    fn is_in_bounds(&self, x: i16, y: i16) -> bool {
        x >= 0 && x < self.width && y >= 0 && y < self.height
    }
}

impl std::ops::Index<(i16, i16)> for Game {
    type Output = Field;

    fn index(&self, (x, y): (i16, i16)) -> &Self::Output {
        &self.fields[self.width as usize * y as usize + x as usize]
    }
}

impl std::ops::IndexMut<(i16, i16)> for Game {
    fn index_mut(&mut self, (x, y): (i16, i16)) -> &mut Self::Output {
        &mut self.fields[self.width as usize * y as usize + x as usize]
    }
}

#[derive(Clone, Copy, Debug)]
struct Field {
    show: ShowState,
    state: FieldState,
}

impl Field {
    fn free(neighbors: u8) -> Self {
        Self {
            show: ShowState::Hide,
            state: FieldState::Free(neighbors),
        }
    }
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum ShowState {
    Hide,
    Hint,
    Show,
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum FieldState {
    Free(u8),
    Mine,
}

fn format_duration(duration: Duration) -> String {
    let total_secs = duration.as_secs();
    let secs = total_secs % 60;
    let mins = total_secs / 60;
    format!("{mins:2}:{secs:02}")
}

pub fn update(ui: &mut Ui, ms: &mut Minesweeper) {
    let menu_bar_height = 40.0;
    let available_size = ui.available_size() - Vec2::new(0.0, menu_bar_height);
    let cells = Vec2::new(ms.game.width as f32, ms.game.height as f32);
    let ratio = available_size / cells;
    let cell_size = Vec2::splat(ratio.min_elem());
    let board_size = cells * cell_size;
    let board_offset = Pos2::new(0.0, menu_bar_height) + (available_size - board_size) * 0.5;
    let board_rect = Rect::from_min_size(board_offset, board_size);
    ui.allocate_ui(Vec2::new(ui.available_width(), menu_bar_height), |ui| {
        ui.horizontal(|ui| {
            ui.add_space(board_offset.x);
            let open_mine_count = match ms.game.play_state {
                PlayState::Init => "?".to_string(),
                PlayState::Playing(_) | PlayState::Won(_) | PlayState::Lost(_) => {
                    ms.game.open_mine_count().to_string()
                }
            };
            let text = RichText::new(open_mine_count).font(FontId::monospace(30.0));
            ui.label(text);

            ui.with_layout(Layout::right_to_left(Align::Center), |ui| {
                ui.add_space(board_offset.x);
                let play_duration = format_duration(ms.game.play_duration());
                let text = RichText::new(play_duration).font(FontId::monospace(30.0));
                ui.label(text);

                ui.add_space(20.0);
                let text = RichText::new("\u{21bb}").font(FontId::monospace(30.0));
                let button = Button::new(text).frame(false);
                if ui.add(button).clicked() {
                    ms.new_game();
                }

                ui.add_space(20.0);
                let text =
                    RichText::new(ms.difficulty.to_string()).font(FontId::proportional(20.0));
                let prev_difficulty = ms.difficulty;
                ComboBox::new("difficulty", "")
                    .selected_text(text)
                    .show_ui(ui, |ui| {
                        let text = RichText::new(Difficulty::Easy.to_string())
                            .font(FontId::proportional(20.0));
                        ui.selectable_value(&mut ms.difficulty, Difficulty::Easy, text);

                        let text = RichText::new(Difficulty::Medium.to_string())
                            .font(FontId::proportional(20.0));
                        ui.selectable_value(&mut ms.difficulty, Difficulty::Medium, text);

                        let text = RichText::new(Difficulty::Hard.to_string())
                            .font(FontId::proportional(20.0));
                        ui.selectable_value(&mut ms.difficulty, Difficulty::Hard, text);
                    });
                if ms.difficulty != prev_difficulty && ms.game.play_state == PlayState::Init {
                    ms.new_game();
                }
            });
        });
    });

    // input
    ui.input(|i| {
        // arrow keys
        if i.key_pressed(Key::ArrowUp) {
            ms.cursor_up();
        } else if i.key_pressed(Key::ArrowRight) {
            ms.cursor_right();
        } else if i.key_pressed(Key::ArrowDown) {
            ms.cursor_down();
        } else if i.key_pressed(Key::ArrowLeft) {
            ms.cursor_left();
        }

        // wasd keys
        if i.key_pressed(Key::W) {
            ms.cursor_up();
        } else if i.key_pressed(Key::D) {
            ms.cursor_right();
        } else if i.key_pressed(Key::S) {
            ms.cursor_down();
        } else if i.key_pressed(Key::A) {
            ms.cursor_left();
        }

        // vim keys
        if i.key_pressed(Key::K) {
            ms.cursor_up();
        } else if i.key_pressed(Key::L) {
            ms.cursor_right();
        } else if i.key_pressed(Key::J) {
            ms.cursor_down();
        } else if i.key_pressed(Key::H) {
            ms.cursor_left();
        }

        if ui.input(|i| i.key_pressed(Key::R)) {
            ms.new_game();
        }

        if let PlayState::Init | PlayState::Playing(_) = ms.game.play_state {
            if i.key_pressed(Key::Enter) || i.key_pressed(Key::Space) {
                if i.modifiers.ctrl {
                    ms.game.hint(ms.cursor_x, ms.cursor_y);
                } else {
                    ms.game.click(ms.cursor_x, ms.cursor_y);
                }
            }
        }
    });

    let resp = ui.allocate_rect(board_rect, Sense::click_and_drag());
    if let PlayState::Init | PlayState::Playing(_) = ms.game.play_state {
        if let Some(pos) = resp.hover_pos() {
            let cell_idx = (pos.to_vec2() - board_offset.to_vec2()) / cell_size;
            let (x, y) = (cell_idx.x.floor() as i16, cell_idx.y.floor() as i16);

            if resp.ctx.input(|i| i.pointer.velocity() != Vec2::ZERO) {
                if ms.game.is_in_bounds(x, y) {
                    ms.cursor_x = x;
                    ms.cursor_y = y;
                }
                ms.cursor_visible = false;
            }

            let mut clicked = false;
            let mut hint = false;
            if resp.clicked() || resp.drag_released_by(PointerButton::Primary) {
                clicked = true;
            } else if resp.secondary_clicked() || resp.drag_released_by(PointerButton::Secondary) {
                clicked = true;
                hint = true;
            }
            if clicked {
                if hint {
                    ms.game.hint(x, y);
                } else {
                    ms.game.click(x, y);
                }
            }
        }
    }

    // draw
    let painter = ui.painter();
    let bg_color = Color32::BLACK;
    let cell_stroke = Stroke::new(1.0, bg_color);
    painter.rect(board_rect, 0.0, bg_color, Stroke::NONE);

    const COLOR_HIDE: Color32 = Color32::from_gray(0x40);
    const COLOR_HINT: Color32 = Color32::from_rgb(0xf0, 0xc0, 0x30);
    const COLOR_SHOW: Color32 = Color32::from_gray(0x80);
    const COLOR_LOSE: Color32 = Color32::from_rgb(0xd0, 0x60, 0x30);
    const NUM_COLORS: [Color32; 8] = [
        Color32::BLUE,
        Color32::GREEN,
        Color32::RED,
        Color32::DARK_BLUE,
        Color32::DARK_RED,
        Color32::LIGHT_BLUE,
        Color32::BLACK,
        Color32::GRAY,
    ];

    for y in 0..ms.game.height {
        for x in 0..ms.game.width {
            let field = ms.game[(x, y)];
            let cell_pos = board_offset + Vec2::new(x as f32, y as f32) * cell_size;
            let cell_rect = Rect::from_min_size(cell_pos, cell_size);
            let cell_center_pos = cell_pos + cell_size / 2.0;
            let mut text_style = TextStyle::Monospace.resolve(ui.style().as_ref());
            text_style.size = cell_size.y * 0.8;

            match ms.game.play_state {
                PlayState::Init | PlayState::Playing(_) => match (field.state, field.show) {
                    (_, ShowState::Hide) => {
                        painter.rect(cell_rect, 0.0, COLOR_HIDE, cell_stroke);
                    }
                    (_, ShowState::Hint) => {
                        painter.rect(cell_rect, 0.0, COLOR_HINT, cell_stroke);
                    }
                    (FieldState::Free(n), ShowState::Show) => {
                        painter.rect(cell_rect, 0.0, COLOR_SHOW, cell_stroke);
                        if n != 0 {
                            let num_color = NUM_COLORS[n as usize - 1];
                            painter.text(
                                cell_center_pos,
                                Align2::CENTER_CENTER,
                                n,
                                text_style,
                                num_color,
                            );
                        }
                    }
                    (FieldState::Mine, ShowState::Show) => {
                        painter.rect(cell_rect, 0.0, Color32::GREEN, cell_stroke);
                    }
                },
                PlayState::Won(_) => match (field.state, field.show) {
                    (FieldState::Free(n), _) => {
                        painter.rect(cell_rect, 0.0, COLOR_SHOW, cell_stroke);
                        if n != 0 {
                            let num_color = NUM_COLORS[n as usize - 1];
                            painter.text(
                                cell_center_pos,
                                Align2::CENTER_CENTER,
                                n,
                                text_style,
                                num_color,
                            );
                        }
                    }
                    (FieldState::Mine, ShowState::Hint) => {
                        painter.rect(cell_rect, 0.0, COLOR_HINT, cell_stroke);
                        painter.text(
                            cell_center_pos,
                            Align2::CENTER_CENTER,
                            "*",
                            text_style,
                            Color32::BLACK,
                        );
                    }
                    (FieldState::Mine, _) => {
                        painter.rect(cell_rect, 0.0, COLOR_SHOW, cell_stroke);
                        painter.text(
                            cell_center_pos,
                            Align2::CENTER_CENTER,
                            "*",
                            text_style,
                            Color32::BLACK,
                        );
                    }
                },
                PlayState::Lost(_) => match (field.state, field.show) {
                    (FieldState::Free(_), ShowState::Hide) => {
                        painter.rect(cell_rect, 0.0, COLOR_HIDE, cell_stroke);
                    }
                    (FieldState::Free(_), ShowState::Hint) => {
                        painter.rect(cell_rect, 0.0, COLOR_HINT, cell_stroke);
                        painter.text(
                            cell_center_pos,
                            Align2::CENTER_CENTER,
                            "x",
                            text_style,
                            Color32::RED,
                        );
                    }
                    (FieldState::Free(n), ShowState::Show) => {
                        painter.rect(cell_rect, 0.0, COLOR_SHOW, cell_stroke);
                        if n != 0 {
                            let num_color = NUM_COLORS[n as usize - 1];
                            painter.text(
                                cell_center_pos,
                                Align2::CENTER_CENTER,
                                n,
                                text_style,
                                num_color,
                            );
                        }
                    }
                    (FieldState::Mine, ShowState::Hide) => {
                        painter.rect(cell_rect, 0.0, COLOR_SHOW, cell_stroke);
                        painter.text(
                            cell_center_pos,
                            Align2::CENTER_CENTER,
                            "*",
                            text_style,
                            Color32::BLACK,
                        );
                    }
                    (FieldState::Mine, ShowState::Hint) => {
                        painter.rect(cell_rect, 0.0, COLOR_HINT, cell_stroke);
                        painter.text(
                            cell_center_pos,
                            Align2::CENTER_CENTER,
                            "*",
                            text_style,
                            Color32::BLACK,
                        );
                    }
                    (FieldState::Mine, ShowState::Show) => {
                        painter.rect(cell_rect, 0.0, COLOR_LOSE, cell_stroke);
                        painter.text(
                            cell_center_pos,
                            Align2::CENTER_CENTER,
                            "*",
                            text_style,
                            Color32::BLACK,
                        );
                    }
                },
            }
        }
    }

    // cursor
    if ms.cursor_visible {
        let cursor_pos =
            board_offset + Vec2::new(ms.cursor_x as f32, ms.cursor_y as f32) * cell_size;
        let cursor_rect = Rect::from_min_size(cursor_pos, cell_size);
        painter.rect(
            cursor_rect,
            4.0,
            Color32::TRANSPARENT,
            Stroke::new(2.0, Color32::from_rgb(0xc0, 0xc0, 0xf0)),
        );
    }
}