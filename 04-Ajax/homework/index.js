const loading = $("#loading_img");

loading.hide();

const boton = $("#boton");
boton.click(() => {
  loading.show();
 const lista = $("#lista");
    lista.empty();
    $.get("http://localhost:5000/amigos", (data) => {
      loading.hide();
  
      data.forEach((amigo) => {
        const li = document.createElement("li");
        li.innerHTML = amigo.name;
        lista.append(li);
      });
    });
  }); 


$("#search").click(() => {
    loading.show();
    const span = $("#amigo");
  const input = $("#input");
  span.text('');
  $.get("http://localhost:5000/amigos/" + input.val(), (data) => {
    loading.hide();
      span.text(data.name)
      input.val('')
  });
});


$("#delete").click(() => {
    loading.show();
    const span = $("#success");
  const input = $("#inputDelete");
  span.text('');
  $.ajax("http://localhost:5000/amigos/" + input.val(), {
    method: 'DELETE'
  }).done((result) => {
    loading.hide();
    input.val('');
    span.text('Tu amigo fue borrado con éxito.');
  })
});