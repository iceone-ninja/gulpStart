$(document).ready(function () {
  $(document).on('click', 'li:not(.active)', function (e) {
    $.each(e.target.classList,function(i,v){ //получаем массив классов выбранного элемента
      if(/tab\d/.test(v)){                  //проверка на наличие класса tab1,2,3, т.к. может быть много классов в любом порядке
        $('.'+v).addClass('active').siblings().removeClass('active');
      }
    });
  });
});