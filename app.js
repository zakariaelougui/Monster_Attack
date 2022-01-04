const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHp + '%' };
    },
    playerBarStyles() {
      return { width: this.playerHp + '%' };
    },
  },

  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHp -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 18);
      this.playerHp -= attackValue;
    },
    specialAttackmonster() {
      const attackValue = getRandomValue(10, 25);
    },
  },
});

app.mount('#game');
