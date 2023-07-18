const skillsContainer = document.getElementById("skillsContainer");

const datos = async(type) => {
    let data;
    await fetch(`http://localhost:3000/${type}`).then((peticion) => peticion.json()).then((respuesta) => (data = respuesta));
    return data;
};


    const skills = await datos('skills');

    skills.forEach(element => {
        console.log(element);

        skillsContainer.innerHTML = skillsContainer.innerHTML + `<div class= "card"><img class="card--icon"src= "${element.icon}"/> <p class="card-titulo">${element.skill}</p></div>`;

    });

