let N=0,U=`string`,P=1,V=`Object`,L=`utf-8`,J=null,S=`number`,K=`undefined`,T=`boolean`,X=4,Q=`function`,W=16,Y=974,H=Array,M=Error,R=Int32Array,O=Uint8Array,I=undefined;var B=(async(a,b)=>{if(typeof Response===Q&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===Q){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var w=((b,c)=>{a.__wbindgen_export_3(b,c)});var u=(a=>{const b=typeof a;if(b==S||b==T||a==J){return `${a}`};if(b==U){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==J){return `Symbol`}else{return `Symbol(${b})`}};if(b==Q){const b=a.name;if(typeof b==U&&b.length>N){return `Function(${b})`}else{return `Function`}};if(H.isArray(a)){const b=a.length;let c=`[`;if(b>N){c+=u(a[N])};for(let d=P;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>P){d=c[P]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof M){return `${a.name}: ${a.message}\n${a.stack}`};return d});var D=((a,b)=>{});var x=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-W);a.__wbindgen_export_4(g,b,c);var d=r()[g/X+ N];var e=r()[g/X+ P];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer(W)}});var k=(a=>{if(d===b.length)b.push(b.length+ P);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_export_7(k(b))}}var z=((b,c,d)=>{a.__wbindgen_export_6(b,c,k(d))});var r=(()=>{if(q===J||q.byteLength===N){q=new R(a.memory.buffer)};return q});var p=(a=>a===I||a===J);var c=(a=>b[a]);var y=((b,c,d)=>{a.__wbindgen_export_5(b,c,k(d))});var G=(async(b)=>{if(a!==I)return a;if(typeof b===K){b=new URL(`minesweeper_web-ae77342489ff5ba1475bcda582e55d8fd74573625cd13666f820225c0a49d34c9622fd573dfdc4dd8b33a2fdc891a731_bg.wasm`,import.meta.url)};const c=C();if(typeof b===U||typeof Request===Q&&b instanceof Request||typeof URL===Q&&b instanceof URL){b=fetch(b)};D(c);const {instance:d,module:e}=await B(await b,c);return E(d,e)});var F=(b=>{if(a!==I)return a;const c=C();D(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return E(d,b)});var t=(()=>{if(s===J||s.byteLength===N){s=new Float64Array(a.memory.buffer)};return s});var C=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==P){b.a=N;return !0};const c=!1;return c});b.wbg.__wbg_crypto_c48a774b022d20ac=(a=>{const b=c(a).crypto;return k(b)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==J;return d});b.wbg.__wbg_process_298734cf255a885d=(a=>{const b=c(a).process;return k(b)});b.wbg.__wbg_versions_e2e78e134e3e5d01=(a=>{const b=c(a).versions;return k(b)});b.wbg.__wbg_node_1cd7a5d853dbea79=(a=>{const b=c(a).node;return k(b)});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbg_msCrypto_bcb970640f50a1e8=(a=>{const b=c(a).msCrypto;return k(b)});b.wbg.__wbg_require_8f08ceecec0f4fee=function(){return A((()=>{const a=module.require;return k(a)}),arguments)};b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===Q;return b});b.wbg.__wbg_randomFillSync_dc1e9a60c158336d=function(){return A(((a,b)=>{c(a).randomFillSync(f(b))}),arguments)};b.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab=function(){return A(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===U?e:I;var g=p(f)?N:o(f,a.__wbindgen_export_0,a.__wbindgen_export_1);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbg_warn_c32f95eaa37484b4=((a,b)=>{console.warn(j(a,b))});b.wbg.__wbg_info_914f65437df3ae09=((a,b)=>{console.info(j(a,b))});b.wbg.__wbg_debug_975e75d6a98e7fa1=((a,b)=>{console.debug(j(a,b))});b.wbg.__wbg_trace_113a411129582eba=((a,b)=>{console.trace(j(a,b))});b.wbg.__wbg_error_5287ab77bfdcdbfd=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_export_8(d,e,P)}});b.wbg.__wbg_new_2135eb8c7b17573b=(()=>{const a=new M();return k(a)});b.wbg.__wbg_stack_5e4edbe5d1e14374=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===S?d:I;t()[a/8+ P]=p(e)?N:e;r()[a/X+ N]=!p(e)});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===T?(b?P:N):2;return d});b.wbg.__wbg_instanceof_WebGl2RenderingContext_f921526c513bf717=(a=>{let b;try{b=c(a) instanceof WebGL2RenderingContext}catch{b=!1}const d=b;return d});b.wbg.__wbg_bindVertexArray_8863a216d7b0a339=((a,b)=>{c(a).bindVertexArray(c(b))});b.wbg.__wbg_bufferData_21334671c4ba6004=((a,b,d,e)=>{c(a).bufferData(b>>>N,c(d),e>>>N)});b.wbg.__wbg_createVertexArray_51d51e1e1e13e9f6=(a=>{const b=c(a).createVertexArray();return p(b)?N:k(b)});b.wbg.__wbg_texImage2D_07240affd06971e9=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_d2841ded12a8aa66=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_bccf4e250f1ce1b8=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,k)}),arguments)};b.wbg.__wbg_activeTexture_799bf1387e911c27=((a,b)=>{c(a).activeTexture(b>>>N)});b.wbg.__wbg_attachShader_47256b6b3d42a22e=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_24f6010e273fa400=((a,b,d)=>{c(a).bindBuffer(b>>>N,c(d))});b.wbg.__wbg_bindTexture_92d6d7f8bff9531e=((a,b,d)=>{c(a).bindTexture(b>>>N,c(d))});b.wbg.__wbg_blendEquationSeparate_205526dad772d160=((a,b,d)=>{c(a).blendEquationSeparate(b>>>N,d>>>N)});b.wbg.__wbg_blendFuncSeparate_fbf93dee3e5ce456=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>N,d>>>N,e>>>N,f>>>N)});b.wbg.__wbg_clear_2db2efe323bfdf68=((a,b)=>{c(a).clear(b>>>N)});b.wbg.__wbg_clearColor_7a7d04702f7e38e5=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_fba1e2efd891e2ac=((a,b,d,e,f)=>{c(a).colorMask(b!==N,d!==N,e!==N,f!==N)});b.wbg.__wbg_compileShader_6bf78b425d5c98e1=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_323425af422748ac=(a=>{const b=c(a).createBuffer();return p(b)?N:k(b)});b.wbg.__wbg_createProgram_4eaf3b97b5747a62=(a=>{const b=c(a).createProgram();return p(b)?N:k(b)});b.wbg.__wbg_createShader_429776c9dd6fb87b=((a,b)=>{const d=c(a).createShader(b>>>N);return p(d)?N:k(d)});b.wbg.__wbg_createTexture_1bf4d6fec570124b=(a=>{const b=c(a).createTexture();return p(b)?N:k(b)});b.wbg.__wbg_deleteBuffer_2c09d03fa4b0bd08=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_53a32852f245b839=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_7c1222349324b5e2=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_4fcfea73cd8f6214=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_04abccd441871232=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_e02106ca6c7002d6=((a,b)=>{c(a).disable(b>>>N)});b.wbg.__wbg_disableVertexAttribArray_6d57776c8f642f44=((a,b)=>{c(a).disableVertexAttribArray(b>>>N)});b.wbg.__wbg_drawElements_a9529eefaf2008bd=((a,b,d,e,f)=>{c(a).drawElements(b>>>N,d,e>>>N,f)});b.wbg.__wbg_enable_195891416c520019=((a,b)=>{c(a).enable(b>>>N)});b.wbg.__wbg_enableVertexAttribArray_8804480c2ea0bb72=((a,b)=>{c(a).enableVertexAttribArray(b>>>N)});b.wbg.__wbg_getAttribLocation_7dbdbad935433494=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_7191ad6ea53607fe=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_77909f6d51d49d4d=function(){return A(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_getParameter_55b36a787dbbfb74=function(){return A(((a,b)=>{const d=c(a).getParameter(b>>>N);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_b81bc53188e286fa=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_export_0,a.__wbindgen_export_1);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getProgramParameter_35522a0bfdfaad27=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getShaderInfoLog_968b93e75477d725=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_export_0,a.__wbindgen_export_1);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getShaderParameter_ac2727ae4fe7648e=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getSupportedExtensions_fafc31aab913037d=(a=>{const b=c(a).getSupportedExtensions();return p(b)?N:k(b)});b.wbg.__wbg_getUniformLocation_9f6eb60c560a347b=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?N:k(f)});b.wbg.__wbg_linkProgram_33998194075d71fb=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_f3a24990aa352fc7=((a,b,d)=>{c(a).pixelStorei(b>>>N,d)});b.wbg.__wbg_scissor_e8e41e1c0a9817c8=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_1cb7c64dc7d1a500=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_85dad939f62a15aa=((a,b,d,e)=>{c(a).texParameteri(b>>>N,d>>>N,e)});b.wbg.__wbg_uniform1i_d2e61a6a43889648=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_b6e484a1302ea599=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_3683cf6f60939dcd=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_316ffe2f0458fde7=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>N,d,e>>>N,f!==N,g,h)});b.wbg.__wbg_viewport_fad1ce9e18f741c0=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_setid_1984ee27e5075311=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_ea915614eac6bbeb=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_clientWidth_51ec21e3189f5656=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_09ec0b524d59c367=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_getBoundingClientRect_ac9db8cf97ca8083=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_instanceof_Window_9029196b662bc42a=(a=>{let b;try{b=c(a) instanceof Window}catch{b=!1}const d=b;return d});b.wbg.__wbg_document_f7ace2b956f30a4f=(a=>{const b=c(a).document;return p(b)?N:k(b)});b.wbg.__wbg_location_56243dba507f472d=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_7c9103698acde322=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_2dd06d8cf68f1d7d=function(){return A((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_f9de7bddca0eaf20=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_performance_2c295061c8b01e0b=(a=>{const b=c(a).performance;return p(b)?N:k(b)});b.wbg.__wbg_speechSynthesis_58ae269ad6d93928=function(){return A((a=>{const b=c(a).speechSynthesis;return k(b)}),arguments)};b.wbg.__wbg_localStorage_dbac11bd189e9fa0=function(){return A((a=>{const b=c(a).localStorage;return p(b)?N:k(b)}),arguments)};b.wbg.__wbg_matchMedia_12ef69056e32d0b3=function(){return A(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_open_7a2a86bf6285507d=function(){return A(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return p(g)?N:k(g)}),arguments)};b.wbg.__wbg_requestAnimationFrame_d082200514b6674d=function(){return A(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearInterval_080a47b47538d08c=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_setTimeout_eb1a0d116c26d9f6=function(){return A(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_body_674aec4c1c0910cd=(a=>{const b=c(a).body;return p(b)?N:k(b)});b.wbg.__wbg_createElement_4891554b28d3388b=function(){return A(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_cc0e0d931b0d9a28=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return p(e)?N:k(e)});b.wbg.__wbg_scrollTop_9e5ce77431551404=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_hidden_736e60e4fd2d186b=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_0cbfa2481b57c377=((a,b)=>{c(a).hidden=b!==N});b.wbg.__wbg_style_3801009b2339aa94=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_815aa9ab53b3cf18=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_3b7ae7e9baa5358a=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_4e9930121c69297f=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_blur_53431c003c82bf53=function(){return A((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_dbcbbbb2a04c0e1f=function(){return A((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_instanceof_WebGlRenderingContext_ea632546035eecb1=(a=>{let b;try{b=c(a) instanceof WebGLRenderingContext}catch{b=!1}const d=b;return d});b.wbg.__wbg_bufferData_a11a9f65f31e7256=((a,b,d,e)=>{c(a).bufferData(b>>>N,c(d),e>>>N)});b.wbg.__wbg_texImage2D_6175916e58c59bc7=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_f1a31f8045b7f831=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_activeTexture_93b4de60af07da9c=((a,b)=>{c(a).activeTexture(b>>>N)});b.wbg.__wbg_attachShader_b65b695055670cb5=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_313561e5bc0e533f=((a,b,d)=>{c(a).bindBuffer(b>>>N,c(d))});b.wbg.__wbg_bindTexture_9cb5c770d1ba2cca=((a,b,d)=>{c(a).bindTexture(b>>>N,c(d))});b.wbg.__wbg_blendEquationSeparate_7ec5e34f066e44f8=((a,b,d)=>{c(a).blendEquationSeparate(b>>>N,d>>>N)});b.wbg.__wbg_blendFuncSeparate_7547ade0a7dfade2=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>N,d>>>N,e>>>N,f>>>N)});b.wbg.__wbg_clear_2ccea1f65b510c97=((a,b)=>{c(a).clear(b>>>N)});b.wbg.__wbg_clearColor_de587608b28bc7ed=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_7cbd7a102954ede9=((a,b,d,e,f)=>{c(a).colorMask(b!==N,d!==N,e!==N,f!==N)});b.wbg.__wbg_compileShader_d88d0a8cd9b72b4d=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_59051f4461e7c5e2=(a=>{const b=c(a).createBuffer();return p(b)?N:k(b)});b.wbg.__wbg_createProgram_88dbe21c0b682e1a=(a=>{const b=c(a).createProgram();return p(b)?N:k(b)});b.wbg.__wbg_createShader_9d7d388633caad18=((a,b)=>{const d=c(a).createShader(b>>>N);return p(d)?N:k(d)});b.wbg.__wbg_createTexture_9d0bb4d741b8ad76=(a=>{const b=c(a).createTexture();return p(b)?N:k(b)});b.wbg.__wbg_deleteBuffer_cdc6b9c73f54aff7=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_d8d7fc79ba83b256=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_9a2f85efe5cb3706=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_a883356c5034d482=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_a047ade0450ff0bf=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_5cf2070641fa2ed7=((a,b)=>{c(a).disable(b>>>N)});b.wbg.__wbg_disableVertexAttribArray_8dacd44e21adcaa2=((a,b)=>{c(a).disableVertexAttribArray(b>>>N)});b.wbg.__wbg_drawElements_3316ee0cd1117c2a=((a,b,d,e,f)=>{c(a).drawElements(b>>>N,d,e>>>N,f)});b.wbg.__wbg_enable_8965e69c596f0a94=((a,b)=>{c(a).enable(b>>>N)});b.wbg.__wbg_enableVertexAttribArray_2b0475db43533cf2=((a,b)=>{c(a).enableVertexAttribArray(b>>>N)});b.wbg.__wbg_getAttribLocation_a5a98d5272b01c0d=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_1e5ec1ec9e58b323=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_088d115a16ecbd7d=function(){return A(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_getParameter_bfab7f0b00c9d7fb=function(){return A(((a,b)=>{const d=c(a).getParameter(b>>>N);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_0b7af4ad85fa52a4=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_export_0,a.__wbindgen_export_1);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getProgramParameter_2a3735278367f8bc=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getShaderInfoLog_979aafa403ffb252=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_export_0,a.__wbindgen_export_1);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getShaderParameter_e8054f1d9026fb70=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getSupportedExtensions_4eb3a5f14f552ce5=(a=>{const b=c(a).getSupportedExtensions();return p(b)?N:k(b)});b.wbg.__wbg_getUniformLocation_688976233799a45a=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?N:k(f)});b.wbg.__wbg_linkProgram_9a2d12d120d99917=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_5ec932ebefd00149=((a,b,d)=>{c(a).pixelStorei(b>>>N,d)});b.wbg.__wbg_scissor_c8ec3b1e053f3756=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_f435f9b74440bb54=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_1f17358e51eb8069=((a,b,d,e)=>{c(a).texParameteri(b>>>N,d>>>N,e)});b.wbg.__wbg_uniform1i_9f94ef0ba6b3cc66=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_69ee217590f07278=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_019eb6df066fabf5=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_ca11984ee8843c0a=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>N,d,e>>>N,f!==N,g,h)});b.wbg.__wbg_viewport_6ebef187c89e2616=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_data_03708a776af7d2f6=((b,d)=>{const e=c(d).data;var f=p(e)?N:o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);var g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_items_0076326dc6f1b7eb=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_e5c28ff6ab126f7b=(a=>{const b=c(a).files;return p(b)?N:k(b)});b.wbg.__wbg_width_e0c6b79d8cdd8897=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_bed51746e072a118=(a=>{const b=c(a).height;return b});b.wbg.__wbg_parentElement_c75962bc9997ea5f=(a=>{const b=c(a).parentElement;return p(b)?N:k(b)});b.wbg.__wbg_appendChild_51339d4cde00ee22=function(){return A(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_deltaX_84508d00a1050e70=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_64823169afb0335d=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_1c680147cfdba8a5=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_top_98ff0408c018d25e=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_23a613d619fb4206=(a=>{const b=c(a).left;return b});b.wbg.__wbg_dataTransfer_bac494821ce31837=(a=>{const b=c(a).dataTransfer;return p(b)?N:k(b)});b.wbg.__wbg_addEventListener_5651108fc3ffeb6e=function(){return A(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_5de660c02ed784e4=function(){return A(((a,b,d,e)=>{c(a).removeEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_bindVertexArrayOES_b7d9da7e073aa6b5=((a,b)=>{c(a).bindVertexArrayOES(c(b))});b.wbg.__wbg_createVertexArrayOES_6a3c3a5a68201f8f=(a=>{const b=c(a).createVertexArrayOES();return p(b)?N:k(b)});b.wbg.__wbg_type_9f716e985ca0633c=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_length_b941879633a63ad8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_b383d7f8253c2d61=((a,b)=>{const d=c(a)[b>>>N];return p(d)?N:k(d)});b.wbg.__wbg_matches_07c564b5b4101cf2=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_cancel_5e5d3ec8238c4c1b=(a=>{c(a).cancel()});b.wbg.__wbg_speak_c5dda9a5a88d036d=((a,b)=>{c(a).speak(c(b))});b.wbg.__wbg_setvolume_9ce6fa0115fb0261=((a,b)=>{c(a).volume=b});b.wbg.__wbg_setrate_3cb16d28a89a549c=((a,b)=>{c(a).rate=b});b.wbg.__wbg_setpitch_8bf2e2409e1707df=((a,b)=>{c(a).pitch=b});b.wbg.__wbg_newwithtext_7319093976235888=function(){return A(((a,b)=>{const c=new SpeechSynthesisUtterance(j(a,b));return k(c)}),arguments)};b.wbg.__wbg_touches_8338f31b10bd7975=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_60ab7fa55837664f=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_instanceof_HtmlInputElement_31b50e0cf542c524=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch{b=!1}const d=b;return d});b.wbg.__wbg_setautofocus_61b6a31b4866ad1f=((a,b)=>{c(a).autofocus=b!==N});b.wbg.__wbg_setsize_7532844e2c9f5e10=((a,b)=>{c(a).size=b>>>N});b.wbg.__wbg_value_9423da9d988ee8cf=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_setvalue_1f95e61cbc382f7f=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_length_25c4aaeba8cfcc81=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_59a092aa0f27eab6=((a,b)=>{const d=c(a).item(b>>>N);return p(d)?N:k(d)});b.wbg.__wbg_get_d6c4e69528650af4=((a,b)=>{const d=c(a)[b>>>N];return p(d)?N:k(d)});b.wbg.__wbg_keyCode_dfa86be31f5ef90c=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_612289acf855835c=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_582686fb2263dd3c=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_48e8701355d8e2d4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_43193b7cc99f8914=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_f41d219def91d438=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_8aeaa079126a9cc7=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_size_b9bc39a333bd5d88=(a=>{const b=c(a).size;return b});b.wbg.__wbg_type_8b3fde044d705ef3=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_arrayBuffer_27cefaea55cbf063=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_href_d62a28e4fc1ab948=function(){return A(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_origin_50aa482fa6784a0a=function(){return A(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_protocol_91948f5885595359=function(){return A(((b,d)=>{const e=c(d).protocol;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_host_15090f3de0544fea=function(){return A(((b,d)=>{const e=c(d).host;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_hostname_b77e5e70d6ff6236=function(){return A(((b,d)=>{const e=c(d).hostname;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_port_1b2b1249cacfca76=function(){return A(((b,d)=>{const e=c(d).port;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_search_6c3c472e076ee010=function(){return A(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_hash_a1a795b89dda8e3d=function(){return A(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_setProperty_b95ef63ab852879e=function(){return A(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_length_dd2eb44022569c32=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_135f0a95f49ed3ff=((a,b)=>{const d=c(a)[b>>>N];return p(d)?N:k(d)});b.wbg.__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch{b=!1}const d=b;return d});b.wbg.__wbg_width_2931aaedd21f1fff=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_a667a942dba6656e=((a,b)=>{c(a).width=b>>>N});b.wbg.__wbg_height_0d36fbbeb60b0661=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_a747d440760fe5aa=((a,b)=>{c(a).height=b>>>N});b.wbg.__wbg_getContext_7c5944ea807bf5d3=function(){return A(((a,b,d)=>{const e=c(a).getContext(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_userAgent_2053026e2b1e0c7e=function(){return A(((b,d)=>{const e=c(d).userAgent;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_vibrate_23cb5a60bf888696=((a,b)=>{const d=c(a).vibrate(b>>>N);return d});b.wbg.__wbg_preventDefault_24104f3f0a54546a=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_55539cfa2506c867=(a=>{c(a).stopPropagation()});b.wbg.__wbg_name_a46b2d975591a0b3=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_lastModified_711034410dfc02ad=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_matches_0f7e350783b542c2=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_clientX_1a480606ab0cabaa=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_9c7878f7faf3900f=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_0a805df688b5bf42=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_8a070ab6169b5fa4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_d89287be4389a3c1=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_7a095234b69de930=(a=>{const b=c(a).button;return b});b.wbg.__wbg_identifier_da93d3d09ccdc54c=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_8e76f76ea9375a85=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_a5a407b52fe202e7=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_4dd0ab6e9ef993ec=(a=>{const b=c(a).force;return b});b.wbg.__wbg_now_0cfdc90c97d0c24b=(a=>{const b=c(a).now();return b});b.wbg.__wbg_getItem_ed8e218e51f1efeb=function(){return A(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?N:o(g,a.__wbindgen_export_0,a.__wbindgen_export_1);var i=l;r()[b/X+ P]=i;r()[b/X+ N]=h}),arguments)};b.wbg.__wbg_setItem_d002ee486462bfff=function(){return A(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_get_44be0491f933a435=((a,b)=>{const d=c(a)[b>>>N];return k(d)});b.wbg.__wbg_length_fff51ee6522a1a18=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_581967eacc0e2604=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_cb65541d95d71282=function(){return A(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_self_1ff1d729e9aae938=function(){return A((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_5f4faef6c12b79ec=function(){return A((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_1d39714405582d3c=function(){return A((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_651f05c6a0944d1c=function(){return A((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===I;return b});b.wbg.__wbg_call_01734de55d61e11d=function(){return A(((a,b,d)=>{const e=c(a).call(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_now_9c5990bda04c7e53=(()=>{const a=Date.now();return a});b.wbg.__wbg_resolve_53698b95aaf7fcf8=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_f7e06ee3c11698eb=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_b2267541e2a73865=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_085ec1f694018c4f=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_828b952f0e692245=((a,b,d)=>{const e=new Int8Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_735ed5ea2ae07fe9=((a,b,d)=>{const e=new Int16Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_9f43b22ab631d1d6=((a,b,d)=>{const e=new R(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa=((a,b,d)=>{const e=new O(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_new_8125e318e6245eed=(a=>{const b=new O(c(a));return k(b)});b.wbg.__wbg_set_5cf90238115182c3=((a,b,d)=>{c(a).set(c(b),d>>>N)});b.wbg.__wbg_length_72e2208bbc0efc61=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithbyteoffsetandlength_31ff1024ef0c63c7=((a,b,d)=>{const e=new Uint16Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_6df0e8c3efd2a5d3=((a,b,d)=>{const e=new Uint32Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_69193e31c844b792=((a,b,d)=>{const e=new Float32Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithlength_e5d69174d6984cd7=(a=>{const b=new O(a>>>N);return k(b)});b.wbg.__wbg_subarray_13db269f57aa838d=((a,b,d)=>{const e=c(a).subarray(b>>>N,d>>>N);return k(e)});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_export_0,a.__wbindgen_export_1);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new M(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper2374=((a,b,c)=>{const d=v(a,b,Y,w);return k(d)});b.wbg.__wbindgen_closure_wrapper2376=((a,b,c)=>{const d=v(a,b,Y,x);return k(d)});b.wbg.__wbindgen_closure_wrapper2378=((a,b,c)=>{const d=v(a,b,Y,y);return k(d)});b.wbg.__wbindgen_closure_wrapper2581=((a,b,c)=>{const d=v(a,b,1041,z);return k(d)});return b});var e=(a=>{if(a<132)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:P,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=N;try{return e(c,f.b,...b)}finally{if(--f.cnt===N){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===I){const c=m.encode(a);const d=b(c.length,P)>>>N;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,P)>>>N;const f=i();let g=N;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==N){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,P)>>>N;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var i=(()=>{if(h===J||h.byteLength===N){h=new O(a.memory.buffer)};return h});var j=((a,b)=>{a=a>>>N;return g.decode(i().subarray(a,a+ b))});var E=((b,c)=>{a=b.exports;G.__wbindgen_wasm_module=c;s=J;q=J;h=J;a.__wbindgen_start();return a});let a;const b=new H(128).fill(I);b.push(I,J,!0,!1);let d=b.length;const g=typeof TextDecoder!==K?new TextDecoder(L,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw M(`TextDecoder not available`)}};if(typeof TextDecoder!==K){g.decode()};let h=J;let l=N;const m=typeof TextEncoder!==K?new TextEncoder(L):{encode:()=>{throw M(`TextEncoder not available`)}};const n=typeof m.encodeInto===Q?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=J;let s=J;export default G;export{F as initSync}