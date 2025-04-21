let add=document.getElementById("addtodo");
let input=document.getElementById("inputfield");
let todo=document.getElementById("to-do-container");


add.addEventListener('click',additem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        additem();
    }
});

function additem(e){
    const item_value = input.value;
    const item = document.createElement('div');
    item.classList.add('item');


    const item_content=document.createElement('div');
    item_content.classList.add('content');
    item.appendChild(item_content);

    const input_item=document.createElement('input');
    input_item.classList.add('text');
    input_item.type ='text';
    input_item.value=item_value;
    input_item.setAttribute('readonly','readonly');
    input_item.addEventListener('dblclick',()=>{
        input_item.style.textDecoration="line-through";
    });

    item_content.appendChild(input_item);

    const item_action = document.createElement('div');
    item_action.classList.add('actions');
    const btn_edit=document.createElement('button');
    btn_edit.classList.add('edit','btn','btn-success');
    btn_edit.type="button";
    btn_edit.innerText="Edit";

    const btn_del=document.createElement('button');
    btn_del.classList.add('delete','btn','btn-danger');
    btn_del.type="button";
    btn_del.innerText="Delete";
    item_action.appendChild(btn_edit);
    item_action.appendChild(btn_del);

    item.appendChild(item_action);
    todo.appendChild(item);




    btn_edit.addEventListener('click',()=>{
        if(btn_edit.innerText.toLowerCase()=="edit"){
            btn_edit.innerHTML="save";
            input_item.removeAttribute("readonly");
            input_item.focus();
        }else{
            btn_edit.innerHTML='Edit';
            input_item.setAttribute('readonly','readonly');
        }
    });

    btn_del.addEventListener('click',()=>{
        todo.removeChild(item);
    });
};