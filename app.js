// function annonce(id, titre_rubrique, type_annonce, adresse, description) {
//     this.id = id;
//     this.titre_rubrique = titre_rubrique;
//     this.type_annonce = type_annonce;
//     this.adresse = adresse;
//     this.description = description;
// }

// var rubrique = [];
var categorie;

$('#typeAnn').on('click', function () {
    if ($('#vac').prop('checked') == true) {
        $('.categorieVac').removeClass('start_hide')
        $('.categorieImmo').addClass('start_hide')
        return categorie = "Vacances";
    } else {
        $('.categorieImmo').removeClass('start_hide')
        $('.categorieVac').addClass('start_hide')
        return categorie = "Immobilier";
    }
})

i = 0;
$('#newAnnonce').on('click', function () {
    var sous_categorie = "";
    categorie == "Vacances" ? sous_categorie = $('#categorieVac option:selected').text() : sous_categorie = $('#categorieImmo option:selected').text();
    //rubrique.push(new annonce(i, categorie, sous_categorie, $('#adresse').val(), $('#description').val()));
    $('.tableau').append('<tr id="tr' + i + '"><td>' + categorie + '</td><td>' + sous_categorie + '</td><td>' + $('#adresse').val() + '</td><td>' + $('#description').val() + '</td></tr>')
    i++
})

$('#affTab').on('click', function () {
    $('table').removeClass("start_hide");
})