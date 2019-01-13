function about(){
  alert('海洋研究会は約70年の歴史を持つマリンスポーツサークルです。３０名ほどの部員で活動しています。')
}
function intro(){
  alert('川上康熙です。１９歳です。海洋研究会に所属しています。')
}
function photo(){
  window.location.href ='photo.html';

}
//home page
function initMap() {

  var latlng = new google.maps.LatLng(35.305859, 139.488236);

  var opt = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // 地図を表示する。
  var map = new google.maps.Map(document.getElementById('map'), opt);
}
