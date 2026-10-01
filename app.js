const WHATSAPP_NUMBER = ''; // Add digits only later, e.g. 23324XXXXXXX
const form = document.getElementById('orderForm');
const toast = document.getElementById('toast');
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

function notify(message){
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),3500);
}

function waLink(message){
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : null;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const message = `Hello Sweet Bakery! 🍰\n\nI'd like to place an order.\nName: ${data.name}\nPhone: ${data.phone}\nOrder: ${data.type}\nPreferred date: ${data.date || 'Flexible'}\nDetails: ${data.details}`;
  const url = waLink(message);
  if(url){
    window.open(url, '_blank');
    form.reset();
  } else {
    notify('Add Sweet Bakery’s WhatsApp number in app.js to activate ordering.');
  }
});

document.getElementById('whatsappDirect').addEventListener('click',(e)=>{
  e.preventDefault();
  const url = waLink('Hello Sweet Bakery! I would like to make an enquiry.');
  if(url) window.open(url,'_blank');
  else notify('Add Sweet Bakery’s WhatsApp number in app.js to activate this button.');
});

document.querySelector('.menu').addEventListener('click',()=>{
  const nav = document.querySelector('.navlinks');
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  if(nav.style.display === 'flex'){
    nav.style.position='absolute'; nav.style.top='78px'; nav.style.left='0'; nav.style.right='0';
    nav.style.padding='22px'; nav.style.background='#fffaf2'; nav.style.flexDirection='column';
    nav.style.boxShadow='0 20px 30px rgba(0,0,0,.08)';
  }
});
