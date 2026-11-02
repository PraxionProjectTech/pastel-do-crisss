const DEFAULT_PRODUCTS = [
  // Pastéis simples
  {id:"sim-carne",name:"Pastel de Carne",description:"Pastel simples.",price:15,tag:"SIMPLES",category:"Pastéis simples"},
  {id:"sim-frango",name:"Pastel de Frango",description:"Pastel simples.",price:15,tag:"SIMPLES",category:"Pastéis simples"},
  {id:"sim-queijo",name:"Pastel de Queijo",description:"Pastel simples.",price:15,tag:"SIMPLES",category:"Pastéis simples"},
  {id:"sim-presunto",name:"Pastel de Presunto",description:"Pastel simples.",price:15,tag:"SIMPLES",category:"Pastéis simples"},
  {id:"sim-calabresa",name:"Pastel de Calabresa",description:"Pastel simples.",price:17,tag:"SIMPLES",category:"Pastéis simples"},
  {id:"sim-bacon",name:"Pastel de Bacon",description:"Pastel simples.",price:17,tag:"SIMPLES",category:"Pastéis simples"},
  {id:"sim-pizza",name:"Pastel de Pizza",description:"Pastel simples.",price:17,tag:"SIMPLES",category:"Pastéis simples"},

  // Pastéis duplos
  {id:"dup-costela-boi",name:"Costela de Boi",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-frango-queijo",name:"Frango com Queijo",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-frango-bacon",name:"Frango com Bacon",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-frango-catupiry",name:"Frango com Catupiry",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-catupiry-milho",name:"Catupiry com Milho",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-queijo-palmito",name:"Queijo com Palmito",description:"Pastel duplo.",price:18,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-carne-queijo",name:"Carne com Queijo",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-carne-catupiry",name:"Carne com Catupiry",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-carne-palmito",name:"Carne com Palmito",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-queijo-bacon",name:"Queijo e Bacon",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-presunto-queijo",name:"Presunto e Queijo",description:"Pastel duplo.",price:17,tag:"DUPLO",category:"Pastéis duplos"},
  {id:"dup-catupiry-queijo",name:"Catupiry com Queijo",description:"Pastel duplo.",price:18,tag:"DUPLO",category:"Pastéis duplos"},

  // Especiais
  {id:"esp-costela-queijo-banana",name:"Costela, Queijo e Banana",description:"Especial com banana.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-calabresa-queijo-banana",name:"Calabresa, Queijo e Banana",description:"Especial com banana.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-camarao-queijo-banana",name:"Camarão, Queijo e Banana",description:"Especial com banana.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-carne-seca-queijo-banana",name:"Carne Seca, Queijo e Banana",description:"Especial com banana.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-carne-seca-queijo-abobora",name:"Carne Seca, Queijo e Abóbora",description:"Especial.",price:25,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-carne-seca-abobora",name:"Carne Seca com Abóbora",description:"Especial.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-camarao-palmito",name:"Camarão com Palmito",description:"Especial.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-camarao-catupiry",name:"Camarão Catupiry",description:"Especial.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-carne-seca-catupiry",name:"Carne Seca Catupiry",description:"Especial.",price:20,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-carne-seca",name:"Carne Seca",description:"Especial.",price:17,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-camarao",name:"Camarão",description:"Especial.",price:17,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"esp-palmito",name:"Palmito",description:"Especial.",price:17,tag:"ESPECIAL",category:"Especiais com banana"},
  {id:"big-cris",name:"Big Cris",description:"Pastel acompanha duas massas e todos os ingredientes do cardápio.",price:40,tag:"ESPECIAL",category:"Especiais com banana"},

  // Adicionais
  {id:"add-queijo",name:"Adicional de Queijo",description:"Adicional para o pedido.",price:4,tag:"ADICIONAL",category:"Adicionais"},
  {id:"add-catupiry",name:"Adicional de Catupiry",description:"Adicional para o pedido.",price:4,tag:"ADICIONAL",category:"Adicionais"},
  {id:"add-palmito",name:"Adicional de Palmito",description:"Adicional para o pedido.",price:4,tag:"ADICIONAL",category:"Adicionais"},
  {id:"add-azeitona",name:"Adicional de Azeitona",description:"Adicional para o pedido.",price:2,tag:"ADICIONAL",category:"Adicionais"},
  {id:"add-milho",name:"Adicional de Milho",description:"Adicional para o pedido.",price:1,tag:"ADICIONAL",category:"Adicionais"},

  // Pastéis doces
  {id:"doce-leite-queijo-canela",name:"Doce de Leite, Queijo e Canela",description:"Pastel doce.",price:20,tag:"DOCE",category:"Pastéis doces"},
  {id:"doce-queijo-goiabada",name:"Queijo com Goiabada",description:"Pastel doce.",price:20,tag:"DOCE",category:"Pastéis doces"},
  {id:"doce-queijo-banana-canela",name:"Queijo, Banana e Canela",description:"Pastel doce.",price:18,tag:"DOCE",category:"Pastéis doces"},

  // Bebidas
  {id:"beb-coca-2l",name:"Coca-Cola 2 Litros",description:"Bebida.",price:16,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-coca-15l",name:"Coca-Cola 1,5 Litro",description:"Bebida.",price:13,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-guarana-2l",name:"Guaraná 2 Litros",description:"Bebida.",price:15,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-refri-uva-laranja",name:"Refrigerante Uva e Laranja",description:"Bebida.",price:11,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-guarana-1l",name:"Guaraná 1 Litro",description:"Bebida.",price:10,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-coca-600",name:"Coca-Cola 600 ml",description:"Bebida.",price:8,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-lata-coca-guarana",name:"Latinha Coca-Cola ou Guaraná",description:"Bebida.",price:7,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-agua-saborizada-gas",name:"Água Saborizada com Gás",description:"Bebida.",price:6,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-agua-com-gas",name:"Água com Gás",description:"Bebida.",price:4,tag:"BEBIDA",category:"Refrigerantes"},
  {id:"beb-agua-mineral",name:"Água Mineral",description:"Bebida.",price:3,tag:"BEBIDA",category:"Refrigerantes"},

  // Caldo de cana e suco
  {id:"caldo-500",name:"Caldo de Cana 500 ml",description:"Caldo de cana.",price:10,tag:"BEBIDA",category:"Caldo de cana"},
  {id:"caldo-300",name:"Caldo de Cana 300 ml",description:"Caldo de cana.",price:8,tag:"BEBIDA",category:"Caldo de cana"},
  {id:"suco-laranja-500",name:"Suco de Laranja 500 ml",description:"Suco de laranja.",price:10,tag:"BEBIDA",category:"Suco de laranja"},
  {id:"suco-laranja-300",name:"Suco de Laranja 300 ml",description:"Suco de laranja.",price:8,tag:"BEBIDA",category:"Suco de laranja"}
];
const MENU_VERSION = 2;
const PASTEL_IMAGE = "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85";
const STORAGE_KEY = "pastelDoCrisSettings";
const CART_KEY = "pastelDoCrisCart";
const WHATSAPP_NUMBER = "5527996173200";
const WEEK_DAYS = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
const DEFAULT_SCHEDULE = WEEK_DAYS.map((day,index)=>({day,open:false,start:"18:00",end:"23:00"}));
const defaults = {siteName:"PASTEL DO CRIS",primary:"#d8ad45",background:"#0b0b0b",products:DEFAULT_PRODUCTS,schedule:DEFAULT_SCHEDULE};
let settings = loadSettings(), cart = loadCart();

function loadSettings(){
  try{
    const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved&&Array.isArray(saved.products)){
      const schedule=Array.isArray(saved.schedule)?saved.schedule:DEFAULT_SCHEDULE;
      const menuNeedsUpdate=saved.menuVersion!==MENU_VERSION;
      const products=menuNeedsUpdate?DEFAULT_PRODUCTS:saved.products;
      const loaded={...defaults,...saved,products,menuVersion:MENU_VERSION,
        schedule:WEEK_DAYS.map((day,index)=>({...DEFAULT_SCHEDULE[index],...(schedule[index]||{}),day}))};
      if(menuNeedsUpdate){localStorage.setItem(STORAGE_KEY,JSON.stringify(loaded));localStorage.setItem(CART_KEY,"[]");}
      return loaded;
    }
  }catch(e){}
  return structuredClone(defaults);
}
function loadCart(){try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch(e){return []}}
function money(value){return Number(value).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}
function persist(){localStorage.setItem(STORAGE_KEY,JSON.stringify(settings))}
function persistCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart))}
function applyTheme(){
  document.documentElement.style.setProperty("--yellow",settings.primary);
  document.documentElement.style.setProperty("--bg",settings.background);
  document.querySelector('meta[name="theme-color"]').content=settings.background;
  document.getElementById("siteName").textContent=settings.siteName;
  document.getElementById("footerName").textContent=settings.siteName;
  document.title=settings.siteName;
  renderPublicHours();
}
function renderProducts(){
  const grid=document.getElementById("productsGrid");
  const groups=new Map();
  settings.products.forEach(product=>{
    const category=product.category||"Cardápio";
    if(!groups.has(category))groups.set(category,[]);
    groups.get(category).push(product);
  });
  grid.innerHTML=[...groups.entries()].map(([category,products])=>`
    <section class="menu-category">
      <h2 class="menu-category-title">${escapeHTML(category)}</h2>
      <div class="menu-category-grid">${products.map(p=>`<article class="product-card">
        <div class="product-photo"><img src="${p.image||PASTEL_IMAGE}" alt="${escapeHTML(p.name)}" loading="lazy"><span class="product-tag">${escapeHTML(p.tag||"FEITO NA HORA")}</span></div>
        <div class="product-info"><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.description||"Preparado com ingredientes selecionados.")}</p>
        <div class="product-bottom"><strong class="price">${money(p.price)}</strong><button class="add-btn" data-add="${p.id}">+ ADICIONAR</button></div></div></article>`).join("")}</div>
    </section>`).join("");
  grid.querySelectorAll("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addToCart(btn.dataset.add)));
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function addToCart(id){const product=settings.products.find(p=>p.id===id);if(!product)return;const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});persistCart();renderCart();openCart()}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);persistCart();renderCart()}
function renderCart(){
  const host=document.getElementById("cartItems");
  document.getElementById("cartCount").textContent=cart.reduce((n,x)=>n+x.qty,0);
  if(!cart.length){host.innerHTML='<p class="empty-cart">Sua sacola está vazia.</p>';document.getElementById("checkoutOpen").disabled=true;document.getElementById("checkoutOpen").style.opacity=".45"}
  else{host.innerHTML=cart.map(item=>{const p=settings.products.find(x=>x.id===item.id);if(!p)return "";return `<div class="cart-line"><div><strong>${escapeHTML(p.name)}</strong><small>${money(p.price)} cada · ${money(p.price*item.qty)}</small></div><div class="quantity"><button data-qty="${p.id}" data-delta="-1">−</button><b>${item.qty}</b><button data-qty="${p.id}" data-delta="1">+</button></div></div>`}).join("");host.querySelectorAll("[data-qty]").forEach(b=>b.addEventListener("click",()=>changeQty(b.dataset.qty,Number(b.dataset.delta))));document.getElementById("checkoutOpen").disabled=false;document.getElementById("checkoutOpen").style.opacity="1"}
  const total=cart.reduce((sum,item)=>{const p=settings.products.find(x=>x.id===item.id);return sum+(p?p.price*item.qty:0)},0);
  document.getElementById("cartTotal").textContent=money(total);
}
function openCart(){document.getElementById("cartDrawer").classList.add("open");document.getElementById("cartOverlay").classList.add("show")}
function closeCart(){document.getElementById("cartDrawer").classList.remove("open");document.getElementById("cartOverlay").classList.remove("show")}
function openModal(id){document.getElementById(id).classList.add("show")}
function closeModal(id){document.getElementById(id).classList.remove("show")}
document.getElementById("cartOpen").addEventListener("click",openCart);
document.getElementById("cartClose").addEventListener("click",closeCart);
document.getElementById("cartOverlay").addEventListener("click",closeCart);
document.getElementById("checkoutOpen").addEventListener("click",()=>{if(cart.length){closeCart();openModal("checkoutModal")}});
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>closeModal(b.dataset.close)));
document.querySelectorAll(".modal-backdrop").forEach(bg=>bg.addEventListener("click",e=>{if(e.target===bg)bg.classList.remove("show")}));
document.getElementById("checkoutForm").addEventListener("submit",e=>{
  e.preventDefault();if(!cart.length)return;
  const name=document.getElementById("customerName").value.trim(),address=document.getElementById("customerAddress").value.trim();
  if(!name||!address)return;
  const lines=cart.map(item=>{const p=settings.products.find(x=>x.id===item.id);return p?`• ${p.name} x${item.qty} — ${money(p.price*item.qty)}`:""}).filter(Boolean);
  const total=cart.reduce((sum,item)=>{const p=settings.products.find(x=>x.id===item.id);return sum+(p?p.price*item.qty:0)},0);
  const message=`Olá! Quero fazer um pedido no ${settings.siteName}.%0A%0A*Pedido:*%0A${lines.map(encodeURIComponent).join("%0A")}%0A%0A*Total: ${encodeURIComponent(money(total))}*%0A%0A*Cliente:* ${encodeURIComponent(name)}%0A*Endereço:* ${encodeURIComponent(address)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,"_blank","noopener");
  cart=[];persistCart();renderCart();closeModal("checkoutModal");e.target.reset();
});

document.getElementById("adminOpen").addEventListener("click",()=>{document.getElementById("loginError").textContent="";document.getElementById("adminLoginView").hidden=false;document.getElementById("adminPanel").hidden=true;openModal("adminModal")});
document.getElementById("loginForm").addEventListener("submit",e=>{
  e.preventDefault();const user=document.getElementById("adminUser").value,pass=document.getElementById("adminPass").value;
  if(user==="pastel"&&pass==="cris"){document.getElementById("adminLoginView").hidden=true;document.getElementById("adminPanel").hidden=false;fillAdmin()}
  else document.getElementById("loginError").textContent="Usuário ou senha incorretos.";
});
function fillAdmin(){
  document.getElementById("editSiteName").value=settings.siteName;
  document.getElementById("editPrimary").value=settings.primary;
  document.getElementById("editBackground").value=settings.background;
  renderAdminSchedule();
  renderAdminProducts();
}
function renderAdminSchedule(){
  const host=document.getElementById("adminSchedule");
  if(!host)return;
  host.innerHTML=settings.schedule.map((item,index)=>`
    <div class="schedule-row ${item.open?"is-enabled":"is-disabled"}" data-schedule-row="${index}">
      <label class="schedule-day" for="dayOpen${index}">
        <input type="checkbox" id="dayOpen${index}" data-day-toggle="${index}" ${item.open?"checked":""}>
        <span>${item.day}</span>
      </label>
      <div class="schedule-time">
        <label class="time-control" for="dayStart${index}">
          <span>ABERTURA</span>
          <input id="dayStart${index}" data-day-start="${index}" type="time" value="${item.start||"18:00"}" ${item.open?"":"disabled"}>
        </label>
        <label class="time-control" for="dayEnd${index}">
          <span>FECHAMENTO</span>
          <input id="dayEnd${index}" data-day-end="${index}" type="time" value="${item.end||"23:00"}" ${item.open?"":"disabled"}>
        </label>
      </div>
    </div>`).join("");

  // Event delegation: one listener for all seven day toggles instead of
  // attaching separate handlers every time the admin panel is opened.
  host.onchange=(event)=>{
    const toggle=event.target.closest("[data-day-toggle]");
    if(!toggle)return;
    const index=toggle.dataset.dayToggle;
    const row=host.querySelector(`[data-schedule-row="${index}"]`);
    const start=row.querySelector("[data-day-start]");
    const end=row.querySelector("[data-day-end]");
    start.disabled=!toggle.checked;
    end.disabled=!toggle.checked;
    row.classList.toggle("is-enabled",toggle.checked);
    row.classList.toggle("is-disabled",!toggle.checked);
  };
}
function renderPublicHours(){
  const status=document.getElementById("storeStatusText");
  const detail=document.getElementById("storeStatusDetail");
  const dot=document.getElementById("storeStatusDot");
  const hours=document.getElementById("publicHoursText");
  if(!status||!detail||!dot||!hours)return;

  const active=settings.schedule.filter(x=>x.open);
  const summary=active.map(item=>`${item.day.slice(0,3)} ${item.start}–${item.end}`).join(" · ");
  hours.textContent=summary||"Horários ainda não definidos";

  const now=new Date();
  const today=settings.schedule[now.getDay()];
  const current=now.getHours()*60+now.getMinutes();
  const toMinutes=value=>{
    const [h,m]=String(value||"00:00").split(":").map(Number);
    return h*60+m;
  };
  let isOpen=false;
  let closeTime="";
  if(today&&today.open){
    const start=toMinutes(today.start),end=toMinutes(today.end);
    if(end>start&&current>=start&&current<end){isOpen=true;closeTime=today.end;}
    else if(end<start&&current>=start){isOpen=true;closeTime=today.end;}
  }
  // If yesterday's schedule passes midnight, it can still be open today.
  if(!isOpen){
    const yesterday=settings.schedule[(now.getDay()+6)%7];
    if(yesterday&&yesterday.open&&toMinutes(yesterday.end)<toMinutes(yesterday.start)&&current<toMinutes(yesterday.end)){
      isOpen=true;closeTime=yesterday.end;
    }
  }
  status.textContent=isOpen?"ESTABELECIMENTO ABERTO":"ESTABELECIMENTO FECHADO";
  detail.textContent=isOpen?`Aberto agora · fecha às ${closeTime}`:(today&&today.open?`Hoje: ${today.start} às ${today.end}`:"Fechado hoje");
  dot.classList.toggle("is-open",isOpen);
  dot.classList.toggle("is-closed",!isOpen);
}
function renderAdminProducts(){
  document.getElementById("adminProducts").innerHTML=settings.products.map((p,i)=>`
    <div class="admin-product">
      <div class="admin-product-head">
        <strong>${p.image?`<img class="product-admin-thumb" src="${p.image}" alt="">`:""}${escapeHTML(p.name)}</strong>
        <button class="remove-product-btn" type="button" data-remove-product="${p.id}">EXCLUIR</button>
      </div>
      <label for="price${i}">Preço (R$)</label>
      <input id="price${i}" type="number" min="1" max="999" step=".50" value="${p.price}">
      <label for="desc${i}">Descrição</label>
      <input id="desc${i}" maxlength="100" value="${escapeHTML(p.description||"")}">
    </div>`).join("");
  document.querySelectorAll("[data-remove-product]").forEach(btn=>btn.addEventListener("click",()=>{
    if(settings.products.length<=1){alert("A loja precisa manter pelo menos um produto.");return;}
    const product=settings.products.find(p=>p.id===btn.dataset.removeProduct);
    if(!product||!confirm(`Excluir "${product.name}" do cardápio?`))return;
    settings.products=settings.products.filter(p=>p.id!==btn.dataset.removeProduct);
    cart=cart.filter(item=>item.id!==btn.dataset.removeProduct);
    persist();persistCart();renderAdminProducts();renderProducts();renderCart();
  }));
}
function readAndOptimizeImage(file){
  return new Promise((resolve,reject)=>{
    if(!file||!file.type.startsWith("image/")){reject(new Error("Selecione um arquivo de imagem válido."));return;}
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error("Não foi possível ler a imagem."));
    reader.onload=()=>{
      const img=new Image();
      img.onerror=()=>reject(new Error("Não foi possível abrir a imagem."));
      img.onload=()=>{
        const maxSide=1000,scale=Math.min(1,maxSide/Math.max(img.width,img.height));
        const canvas=document.createElement("canvas");
        canvas.width=Math.max(1,Math.round(img.width*scale));
        canvas.height=Math.max(1,Math.round(img.height*scale));
        const ctx=canvas.getContext("2d");
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        resolve(canvas.toDataURL("image/jpeg",0.82));
      };
      img.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}
const newPhotoInput=document.getElementById("newProductPhoto");
const newPhotoPreview=document.getElementById("newProductPreview");
let pendingProductImage="";
newPhotoInput.addEventListener("change",async()=>{
  pendingProductImage="";newPhotoPreview.hidden=true;
  const file=newPhotoInput.files[0];if(!file)return;
  try{
    pendingProductImage=await readAndOptimizeImage(file);
    newPhotoPreview.src=pendingProductImage;newPhotoPreview.hidden=false;
  }catch(err){alert(err.message);newPhotoInput.value="";}
});
document.getElementById("newProductForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("newProductName").value.trim();
  const price=Number(document.getElementById("newProductPrice").value);
  if(!name||!Number.isFinite(price)||price<=0){alert("Informe nome e preço válidos.");return;}
  if(!pendingProductImage){alert("Escolha uma foto para o produto.");return;}
  const id="produto-"+Date.now()+"-"+Math.random().toString(36).slice(2,7);
  try{
    settings.products.push({id,name,description:"Preparado com ingredientes selecionados.",price,tag:"NOVIDADE",category:"Outros",image:pendingProductImage});
    persist();
  }catch(err){
    settings.products.pop();
    alert("Não foi possível salvar a foto. Tente uma imagem menor ou libere espaço no navegador.");
    return;
  }
  renderAdminProducts();renderProducts();renderCart();
  e.target.reset();pendingProductImage="";newPhotoPreview.hidden=true;
  alert("Produto cadastrado com sucesso!");
});
document.getElementById("saveSettings").addEventListener("click",()=>{
  const name=document.getElementById("editSiteName").value.trim();if(!name){alert("Informe o nome da loja.");return}
  settings.siteName=name;settings.primary=document.getElementById("editPrimary").value;settings.background=document.getElementById("editBackground").value;settings.menuVersion=MENU_VERSION;
  settings.products=settings.products.map((p,i)=>({...p,price:Math.max(1,Number(document.getElementById(`price${i}`).value)||p.price),description:document.getElementById(`desc${i}`).value.trim()}));
  settings.schedule=WEEK_DAYS.map((day,index)=>({
    day,
    open:!!document.getElementById(`dayOpen${index}`)?.checked,
    start:document.getElementById(`dayStart${index}`)?.value||"18:00",
    end:document.getElementById(`dayEnd${index}`)?.value||"23:00"
  }));
  try{persist();}catch(err){alert("Não foi possível salvar. O armazenamento do navegador pode estar cheio.");return;}
  applyTheme();renderProducts();renderCart();renderPublicHours();renderAdminProducts();renderAdminSchedule();renderPublicHours();alert("Alterações salvas neste navegador.");
});
document.getElementById("adminLogout").addEventListener("click",()=>{closeModal("adminModal");document.getElementById("loginForm").reset()});
document.getElementById("year").textContent=new Date().getFullYear();
applyTheme();renderProducts();renderCart();renderPublicHours();