function SelectPage(event) {
  const select = document.getElementById("select");
  select.onclick = (event) => {
    event.preventDefault();
    if (select.value ==="default")
    {
        return;
    }
    else{
    document.location.href = "select-pages/" + select.value + ".html";}
  };
}
