/*! Aqua v0.19.11 by @ignatiusmb - imbagus.com
 *  Copyright (c) 2019 Ignatius Bagus
 *  MIT Licensed -> github.com/ignatiusmb/aqua
 *  aqua.imbagus.com
 */
window.Aqua=window.Aqua||{},Aqua.form={init:()=>{for(const e of document.querySelectorAll("form.aqua-form"))for(const t of e.querySelectorAll("input")){const e=document.createElement("label"),o=document.createElement("input"),n=document.createElement("span");for(const e of t.attributes)o.setAttribute(e.name,e.value);e.htmlFor=o.type=t.type,o.placeholder=" ",n.textContent=t.placeholder,n.textContent.charAt(0).toUpperCase(),e.appendChild(o),e.appendChild(n),t.replaceWith(e)}}};