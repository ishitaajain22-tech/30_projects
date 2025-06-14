const apikey = 'CG-GTh4hd5zXeprBapddQjneUvQ'
let bit= document.getElementById('bit')
let bpg = document.getElementById('bp')
let bmc= document.getElementById('bmc')
async function GetBitData() {
    let apiURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=${apikey}`
    let response = await fetch(apiURL)
    let data= await response.json();
    bit.innerText=`$ ${data[0].current_price}`
    bpg.innerText=`${data[0].name}  (${data[0].symbol})`
    bmc.innerText=`Change: ${data[0].price_change_percentage_24h}%`
    if(data[0].price_change_percentage_24h<0){
        let p1 = document.createElement('p');
        p1.innerText = 'Loss';
        p1.style.color = 'red'; 
        bmc.appendChild(p1);
    }else{
        let p1 = document.createElement('p');
        p1.innerText = 'Profit';
        p1.style.color = 'green';
        bmc.appendChild(p1);
    }
}

let eth=document.getElementById('eth')
let epg = document.getElementById('ep')
let emc= document.getElementById('emc')
async function GetEthData() {
    let apiURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&x_cg_demo_api_key=${apikey}`
    let response = await fetch(apiURL)
    let data= await response.json();
    eth.innerText=`$ ${data[0].current_price}`
    epg.innerText=`${data[0].name}  (${data[0].symbol})`
    emc.innerText=`Change: ${data[0].price_change_percentage_24h}%`
    if(data[0].price_change_percentage_24h<0){
        let p = document.createElement('p');
        p.innerText = 'Loss';
        p.style.color = 'red'; 
        emc.appendChild(p);
    }else{
        let p1 = document.createElement('p');
        p.innerText = 'Profit';
        p.style.color = 'green';
        emc.appendChild(p);
    }
}

let doge=document.getElementById('doge')
let dpg = document.getElementById('dp')
let dmc= document.getElementById('dmc')
async function GetDogeData() {
    let apiURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin&x_cg_demo_api_key=${apikey}`
    let response = await fetch(apiURL)
    let data= await response.json();
    doge.innerText=`$ ${data[0].current_price}`
    dpg.innerText=`${data[0].name}  (${data[0].symbol})`
    dmc.innerText=`Change: ${data[0].price_change_percentage_24h}%`
    if(data[0].price_change_percentage_24h<0){
        let p2 = document.createElement('p');
        p2.innerText = 'Loss';
        p2.style.color = 'red'; 
        dmc.appendChild(p2);
    }else{
        let p2 = document.createElement('p');
        p2.innerText = 'Profit';
        p2.style.color = 'green';
        dmc.appendChild(p2);
    }
}
GetBitData();
GetEthData();
GetDogeData();

// arrow change(up-pos)
// 

