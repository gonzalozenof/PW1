<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

function myFunction(x) {
    x.classList.toggle("change");
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

<div class="row">
<div class="col-sm-6">
  <div class="card" style="width: 18rem;">
    <img src="https://d2r9epyceweg5n.cloudfront.net/stores/002/059/331/products/bbe91085-d3cf75d8f08364b86516660474439814-640-0.jpg" class="card-img-top" alt="..."
      href="" class="btn btn-primary"<a>Comprar</a>
 
