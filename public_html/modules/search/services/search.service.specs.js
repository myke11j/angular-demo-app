describe('Search factory', function() {
  var Search;

  beforeEach(angular.mock.module('myApp.search'));

  beforeEach(inject(function(_Search_) {
    Search = _Search_;

    //this is json I've hardcoded which gets lazyloaded
    Search.paras = [
        {
         "id": 1,
         "text" : "Liud tavpuzvi lape bim faleof ju zajdew rat iz nic ilvi obe rolho cenmu mulfos ligte. Tumpugse ha jubi miwot ofamunuba paaf jacsedgu rij ozgeh aca somti ho. Cuz nareri dahceb wikef muga uro kaw giko hu tumizga kesehcep ahubuhsog laov viiwieko. Gadewen tajubdoz sofekko mivos si namemsu duin tiuppo zi od tusofi an. Ewbesolu ecemob jaal esmiber nusire zu desado juhaice kiw woh ofiwe fam cozlolri ut mu."
        },

        {
         "id": 2,
         "text" : "Zo em fika has supkosuw uzgagpe damjel ucsowis mahli fev anuizoan vikfu remolwoc datje ve duozisuz hur. Pap jangunsi gikcab emikuluwo um ku gerji heisged jegreh la ju madlinhuz lotabaj fiuzaowo zo ela rinvu. Bubsuc run rejifu tajruege nulsi fasza lufud mepfaapu mamuw titdimpi ru ceskakce igavfo cijvu husuke ogo. Eb um pe lagji ku du enro noflogzur numtu hoh bi matvaij. Ceicuniv iwhat mijzah zipas foco terapma de buwal vecevi pobipvi kaone bimajked dogvel jeg. Sosuzod wo ravo he biw oro wijabji jekow ri col it nowgohib. Ohamouji beb ugoafucib zelvorus ejnik vefik ga hopohad mesecwa esco sithu rozpagip."
        },

        {
         "id": 3,
         "text" : "oaka arkuve wacer vob tuligha foz vo niwlo kujpow bu igsam bec. Mokjogzi hevuvev cefsu penolerev gojag kuhoos onutit gecoj ge huho fuwdevcus cukob ohvoz. Giwhazosu cikoflew fi poub owolumnil wo uh wigna bewpuj zumuco wulieja red nirac utofon. Laif fu kive siducli oddezmic fuahesu he tuztugew bibena diwaw agfinip bar welur zuhmen udafom wagacev. Imiwow jucivcim nivbe ojubi adu hiwejpo mavidu avevedug wu as ara na cojemma tongotin to gora."
        },
        {
         "id": 4,
         "text" : "Vobeguv hautsam cuhsu arba liwu ej ludpo se kumcu al bazbetibe jif kepej jundeoh gerutwe amvojal ukazidej gufajdam. Adeki ve aklaguza mi keuho diz zu zabavu girgec guepolis bo ulgek asinepona wunaneh zob usrinjuw. Tez jehuj udpejuc ziet ziriho cej we abo da cagul lowecug mogo woho iso vaho wob pah puzuti. Ti zotugese jowhamage ejecuiba awe eweeze bacohlaz umibu kitbi rava ewaciw suzotu sih poeb."
        }
    ]
  }));

  it('search Factory should exist', function() {
    expect(Search).toBeDefined();
  });

  it('Search Factory - find function should return Object', function() {
    expect(typeof Search.find("Zo emfff", Search.paras)).toEqual('object'); //first param for find is anything which user has typed in field
  });
});
