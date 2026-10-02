const WHATSAPP_NUMBER = '233202642538';
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
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const message = [
    'Hello Healthy Oven Bakery! 🍊',
    '',
    'I would like to place an order.',
    '',
    `Name: ${data.name}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Order type: ${data.type}`,
    `Preferred date: ${data.date || 'Flexible'}`,
    '',
    'Order details:',
    data.details,
    '',
    'Sent from the Healthy Oven Bakery website.'
  ].join('\n');
  window.open(waLink(message), '_blank', 'noopener');
});

document.getElementById('whatsappDirect').addEventListener('click',(e)=>{
  e.preventDefault();
  window.open(waLink('Hello Healthy Oven Bakery! I would like to make an enquiry.'), '_blank', 'noopener');
});

document.getElementById('topWhatsapp').addEventListener('click',(e)=>{
  e.preventDefault();
  window.open(waLink('Hello Healthy Oven Bakery! I would like to place an order.'), '_blank', 'noopener');
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
