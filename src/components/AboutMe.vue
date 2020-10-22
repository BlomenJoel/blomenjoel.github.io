<template>
  <div class="pb-md-5">
    <h1 class="pb-4 text--center color-underscore">OM MIG</h1>
    <div class="d-flex">
      <div class="text-area--size">
        <p>
          Hej, Jag heter Joel Blomén och är förnuvarande utvecklare hos Dahl.
        </p>
        <p>
          I grunden är jag utbildad produktutvecklare vid Chalmers universitet,
          och det i kombination med erfarenheten som programmerare ger mig en
          unik möjlighet att närma mig arbetet från två olika perspektiv. Dels
          har jag god förståelse för den tekniska lösningen, dels har jag insikt
          i hur vi kan skapa en bättre upplevelse för användarna.
        </p>
        <p>
          På fritiden håller jag även på med fysisk design, och är aktiv i ett
          makerspace. Jag har nästan alltid kameran med mig, och längtar efter
          att få tillgång till ett ställe att framkalla min analoga film, tills
          dess fortsätter jag fuska med min digitala kamera och effekter i
          Lightroom. Jag jobbar också mot mitt mål att klara av ett triathlon.
          Planerna att tävla sommaren 2020 gick i stöpet, men träningen mot
          sommaren 2021 är i full gång!
        </p>
        <p>
          Jag är en kompetent och driven utvecklare, med en positiv och ödmjuk
          attityd. <br />Ni får gärna höra av er om ni vill veta mer!
        </p>
        <p>
          //J
        </p>
      </div>
      <img src="../assets/joel-photo.jpg" class="ml-5 image--size" />
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    computed: {},
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .text-area--size {
    width: 45%;
    padding: 0% 5%;
  }
  .image--size {
    width: 40%;
    height: 40%;
  }
  .color-underscore {
    height: 100%;
    position: relative;
    background-image: linear-gradient(45deg, #ffb7b7, #ffb7b7);
    margin: auto;
    bottom: 3vh;
    background-position: 9vw 1.5vw;
    width: 30vw;
    max-height: 3vw;
    padding-bottom: 1vw;
  }
</style>
