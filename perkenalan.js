/* ============ Data 12 anggota ============ */
const BAWAAN = [
  {emo:"🎓", nama:"Kirana Gumilangsari", peran:"NPM 267006111166",foto:"kirana.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"0895422668400", sosmed:"@kiranagm_", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"📘", nama:"Jelita Triwulandari", peran:"NPM 267006111013",foto:"jelita.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"089652363973", sosmed:"@jelitatriwulandari21", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"✏️", nama:"Hadi Nur Cahaya", peran:"NPM 267006111175",foto:"WhatsApp Image 2026-09-30 at 16.41.20.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"", sosmed:"", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"📗", nama:"Faiz Rayadhya Permana", peran:"NPM 267006111127",foto:"WhatsApp Image 2026-09-30 at 16.41.18.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"0895610333900", sosmed:"@someonedhya", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"🧑‍🎓", nama:"Ahmad Agam Muzzaki", peran:"NPM 267006111052",foto:"agam.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"082126826906", sosmed:"@agm.cv5", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"📙", nama:"Anwar Musad'dad", peran:"NPM 267006111126",foto:"anwar.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"085954972585", sosmed:"@awayvb", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"📒", nama:"Azril Fitri Nurfadillah", peran:"NPM 267006111045",foto:"azril.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"085156968316", sosmed:"@tiramizoft", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"🎒", nama:"Bintan Milandani", peran:"NPM 267006111051",foto:"",foto:"binntan.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"082126563655", sosmed:"@bintnm_", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"📔", nama:"Daffa Haikal Faa'iz", peran:"NPM 267006111121",foto:"WhatsApp Image 2026-09-30 at 16.48.05.jpeg",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"08139628575", sosmed:"@daffa.h2", hobi:"", cita:"", stik:["🎓 kelompok 8"]},
  {emo:"🧑‍💻", nama:"Dias Rachmadani", peran:"NPM 267006111116",foto:"dias.png",
   bio:"", ttl:"", alamat:"Mahasiswa Universitas Siliwangi, Jurusan Teknik Informatika", email:"", telp:"085624892733", sosmed:"@iassrchmdni", hobi:"", cita:"", stik:["🎓 kelompok 8"]}
];

/* ============ Penyimpanan (hanya untuk preferensi tema & animasi) ============ */
const KEY = 'kelompok-kita-v3';
function load(){ try{ return JSON.parse(localStorage.getItem(KEY) || '{}'); }catch(e){ return {}; } }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(simpanan)); }catch(e){} }
let simpanan = load();

/* Data anggota HANYA berasal dari BAWAAN di atas — untuk mengubah nama, peran, kampus,
   bio, hobi, cita-cita, atau memasang foto (foto:"URL_atau_base64"), edit langsung di kode. */
const ORANG = BAWAAN;
let aktif = -1;

/* Foto bersama dan foto kaka asuh: isi langsung di sini lewat kode (URL gambar atau base64) */
const FOTO_KELOMPOK = "image.png";
const FOTO_MENTOR1 = "WhatsApp Image 2026-09-30 at 16.51.31.jpeg";
const FOTO_MENTOR2 = "1000099614.jpg.jpeg";

/* ============ Grid kartu ============ */
const gridBox = document.getElementById('grid');
function thumbFill(el, o){
  el.innerHTML='';
  if(o.foto){ const im=document.createElement('img'); im.src=o.foto; im.alt=''; el.appendChild(im); }
  else el.textContent = o.emo || '🙂';
}
function buildGrid(){
  gridBox.innerHTML='';
  ORANG.forEach((o,i)=>{
    const c=document.createElement('button'); c.className='card'; c.type='button';
    c.innerHTML='<span class="cno"></span><span class="thumb"></span><span class="cname"></span><span class="crole"></span>';
    c.querySelector('.cno').textContent=i+1;
    c.querySelector('.cname').textContent=o.nama;
    c.querySelector('.crole').textContent=o.peran;
    thumbFill(c.querySelector('.thumb'), o);
    c.addEventListener('click', ()=>buka(i));
    gridBox.appendChild(c);
  });
}
function refreshCard(i){
  const c=gridBox.children[i], o=ORANG[i];
  c.querySelector('.cname').textContent=o.nama;
  c.querySelector('.crole').textContent=o.peran;
  thumbFill(c.querySelector('.thumb'), o);
}

/* ============ Modal ============ */
const veil=document.getElementById('veil'), photoImg=document.getElementById('photoImg'),
      photoEmpty=document.getElementById('photoEmpty'), photoEmo=document.getElementById('photoEmo');

function renderModal(){
  const o=ORANG[aktif];
  document.querySelectorAll('[data-k]').forEach(el=>{ el.textContent = o[el.dataset.k] || ''; });
  document.getElementById('stik1').textContent = '✨ hai!';
  document.getElementById('stik2').textContent = (o.stik&&o.stik[0]) || '📘 kelompok 8';
  if(o.foto){ photoImg.src=o.foto; photoImg.hidden=false; photoEmpty.style.display='none'; }
  else{ photoImg.hidden=true; photoImg.removeAttribute('src'); photoEmpty.style.display='flex'; photoEmo.textContent=o.emo||'🙂'; }
}
function buka(i){ aktif=i; renderModal(); veil.classList.add('open'); document.getElementById('closeBtn').focus(); }
function tutup(){ veil.classList.remove('open'); aktif=-1; }
document.getElementById('closeBtn').addEventListener('click', tutup);
veil.addEventListener('click', e=>{ if(e.target===veil) tutup(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && veil.classList.contains('open')) tutup(); });
document.getElementById('prev').addEventListener('click', ()=>buka((aktif-1+ORANG.length)%ORANG.length));
document.getElementById('next').addEventListener('click', ()=>buka((aktif+1)%ORANG.length));

/* ============ Foto — hanya dari kode (const di atas), tidak bisa diunggah lewat web ============ */
function renderMentorPhoto(url, imgEl, emptyEl){
  if(url){ imgEl.src=url; imgEl.hidden=false; emptyEl.style.display='none'; }
  else{ imgEl.hidden=true; imgEl.removeAttribute('src'); emptyEl.style.display='flex'; }
}
renderMentorPhoto(FOTO_MENTOR1, document.getElementById('mentor1Img'), document.getElementById('mentor1Empty'));
renderMentorPhoto(FOTO_MENTOR2, document.getElementById('mentor2Img'), document.getElementById('mentor2Empty'));

const groupImg=document.getElementById('groupImg'), groupEmpty=document.getElementById('groupEmpty');
renderMentorPhoto(FOTO_KELOMPOK, groupImg, groupEmpty);


/* ============ Tema, cetak, atur ulang ============ */
const root=document.documentElement;
if(simpanan.tema) root.setAttribute('data-theme', simpanan.tema);
document.getElementById('theme').addEventListener('click', ()=>{
  const now=root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  const next=now==='dark'?'light':'dark';
  root.setAttribute('data-theme', next); simpanan.tema=next; save();
});
document.getElementById('print').addEventListener('click', ()=>window.print());
document.getElementById('reset').addEventListener('click', ()=>{ try{ localStorage.removeItem(KEY); }catch(e){} location.reload(); });

/* ============ Emoji beterbangan ============ */
const sky=document.getElementById('sky');
const EMO=['🎈','✨','🌟','🧁','🍭','⭐','🎊','🐥','🌈','🎵','💫','🍡'];
const hemat = matchMedia('(prefers-reduced-motion: reduce)').matches;
let animOn = simpanan.anim===false ? false : true;
if(!animOn) document.body.classList.add('tenang');
function layang(){
  if(!animOn || hemat || document.hidden || sky.childElementCount>20) return;
  const b=document.createElement('b');
  b.textContent=EMO[Math.floor(Math.random()*EMO.length)];
  b.style.left=Math.random()*96+'vw';
  b.style.fontSize=(16+Math.random()*22)+'px';
  b.style.setProperty('--dx',(Math.random()*170-85)+'px');
  b.style.setProperty('--rot',(Math.random()*80-40)+'deg');
  b.style.animationDuration=(8+Math.random()*7)+'s';
  sky.appendChild(b);
  b.addEventListener('animationend', ()=>b.remove());
}
setInterval(layang, 1300);
for(let i=0;i<7;i++) setTimeout(layang, i*550);

function letup(x,y,emo){
  if(hemat || !animOn) return;
  for(let i=0;i<9;i++){
    const s=document.createElement('span'); s.className='pop';
    s.textContent = Math.random()<.5 ? emo : EMO[Math.floor(Math.random()*EMO.length)];
    const a=Math.random()*Math.PI*2, r=45+Math.random()*75;
    s.style.left=x+'px'; s.style.top=y+'px';
    s.style.setProperty('--px',Math.cos(a)*r+'px');
    s.style.setProperty('--py',Math.sin(a)*r+'px');
    s.style.setProperty('--pr',(Math.random()*180-90)+'deg');
    document.body.appendChild(s);
    s.addEventListener('animationend', ()=>s.remove());
  }
}
document.addEventListener('click', e=>{
  const st=e.target.closest('.sticker'); if(!st) return;
  const r=st.getBoundingClientRect();
  letup(r.left+r.width/2, r.top+r.height/2, st.textContent.trim()[0]||'✨');
});
const animBtn=document.getElementById('anim');
function labelAnim(){ animBtn.textContent = animOn ? 'Matikan animasi' : 'Nyalakan animasi'; }
labelAnim();
animBtn.addEventListener('click', ()=>{
  animOn=!animOn; document.body.classList.toggle('tenang', !animOn);
  if(!animOn) sky.innerHTML='';
  simpanan.anim=animOn; save(); labelAnim();
});

/* ============ Musik — pemutar resmi Spotify ============ */
const TRACKS = [
  {id:"3JsydWaf2Ev4ehaLUjj3SY", label:"Lagu 1"},
  {id:"0JBq4P9Jpp37F1PteCgGL1", label:"Lagu 2"},
  {id:"6QFCMUUq1T2Vf5sFUXcuQ7", label:"Lagu 3"}
];
let curTrack = 0;
const spotifyFrame = document.getElementById('spotifyFrame');
function embedUrl(id){ return "https://open.spotify.com/embed/track/" + id + "?utm_source=generator&theme=0"; }
function pilihTrack(i){
  curTrack = i;
  spotifyFrame.src = embedUrl(TRACKS[i].id);
  renderTrackTabs();
}
function renderTrackTabs(){
  tabsBox.innerHTML = '';
  TRACKS.forEach((t,i)=>{
    const b=document.createElement('button'); b.type='button'; b.className='chip'+(i===curTrack?' active':'');
    b.textContent = t.label;
    b.addEventListener('click', ()=>pilihTrack(i));
    tabsBox.appendChild(b);
  });
}
const tabsBox = document.getElementById('trackTabs');
renderTrackTabs();
pilihTrack(0);
document.getElementById('toggleMini').addEventListener('click', ()=>{
  const p=document.getElementById('player');
  p.classList.toggle('mini');
  document.getElementById('toggleMini').textContent = p.classList.contains('mini') ? '+' : '–';
});

/* jalan */
buildGrid();