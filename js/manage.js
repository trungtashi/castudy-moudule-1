

let data = []

function add(){
    let inputId = document.getElementById('id').value
    let inputTitle = document.getElementById('title').value
    let inputDescription = document.getElementById('description').value
    let arr = {
        Id: inputId,
        Title: inputTitle,
        Description: inputDescription
    }
    let index = data.findIndex((i)=> i.Id == arr.Id)
    if(index >= 0){
        data.splice(index,1,arr)
    }
    else
    {
        data.push(arr)
    }
    render()
    clear()
}
function render(){
    table = 
    `<thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    </thead>`
    for(let i = 0; i < data.length; i++){
        table += 
        `<tbody>
            <tr>
                <td>${data[i].Id}</td>
                <td>${data[i].Title}</td>
                <td><textarea>${data[i].Description}</textarea></td>
                <td> 
                    <button class='btn btn-secondary' onclick="deletePost(${data[i].Id})">Delete</button> 
                    <button class='btn btn-secondary' onclick="editPost(${data[i].Id})">Edit</button> 
                </td>
            </tr>
        </tbody>`
    }
    document.getElementById('table').innerHTML = table
}
function clear(){
    inputId = document.getElementById('id').value = ''
    inputTitle = document.getElementById('title').value = ''
    inputDescription = document.getElementById('description').value = ''
}
function deletePost(id){
    for(let i = 0; i < data.length; i++){
        if(data[i].Id == id){
            data.splice(i,1)
            render()
        }
    }
}
function editPost(id){
    for(let i = 0; i < data.length; i++){
        if(data[i].Id == id){
            document.getElementById('id').value = data[i].Id
            document.getElementById('title').value = data[i].Title
            document.getElementById('description').value = data[i].Description
        }
    }
}