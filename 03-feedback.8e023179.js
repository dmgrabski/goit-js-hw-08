document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]');(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const o=JSON.parse(e);t.value=o.email||"",a.value=o.message||""}})();const o=_.throttle((()=>{const e={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);t.addEventListener("input",o),a.addEventListener("input",o),e.addEventListener("submit",(n=>{n.preventDefault(),console.log({email:t.value,message:a.value}),localStorage.removeItem("feedback-form-state"),e.reset(),o.cancel()}))}));
//# sourceMappingURL=03-feedback.8e023179.js.map