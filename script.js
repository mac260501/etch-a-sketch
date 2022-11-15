const container = document.querySelector('.container');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Create 16x16 grid using flexbox
for (let i = 0; i < 16; i++)
{
    let newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');
    for (let j = 0; j< 16; j++)
    {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `${i+1}-${j+1}`);
        newDiv.style.flexGrow = '1';
        newDiv.addEventListener('mouseover', draw);
        newDiv.addEventListener('mousedown', draw);
        newRow.appendChild(newDiv);
    }
    container.appendChild(newRow);
}

function draw(e)
{
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
}