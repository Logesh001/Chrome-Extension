
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const delBtn=document.getElementById("del-btn")

delBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  renderLead()
})


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=" "

    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    renderLead()

    console.log(localStorage.getItem("myLeads"))
})   
function renderLead(){
let vari= ""
{
    for(let i=0;i<myLeads.length;i++)
    {
      // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>" 
      //vari+="<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"    
      vari+=`
      <li>
      <a target='_blank' href='${myLeads[i]}'>
      ${myLeads[i]}
      </a>
      </li>`    
    }
    ulEl.innerHTML = vari
}
}