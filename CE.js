let oldLeads=[]
let myLeads=[]
const tabs=[
  {url:"https://www.youtube.com/watch?v=jS4aFq5-91M&t=24786s"}
]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const delBtn=document.getElementById("del-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")
if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click",function(){
        //myLeads.push(tabs[0].url)
        //localStorage.setItem("myLeads",JSON.stringify(myLeads))
        //render(myLeads)
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
        })
          
          
})

function render(leads){
  let vari= ""
  {
      for(let i=0;i<leads.length;i++)
      {
        // ulEl.innerHTML+="<li>"+leads[i]+"</li>" 
        //vari+="<li><a target='_blank' href='"+leads[i]+"'>"+leads[i]+"</a></li>"    
        vari+=`
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`    
      }
      ulEl.innerHTML = vari
  }
  }

delBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=" "

    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})   
