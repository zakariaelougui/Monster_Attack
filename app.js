const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHp + '%' };
    },
    playerBarStyles() {
      return { width: this.playerHp + '%' };
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },

  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHp -= attackValue;
      this.attackPlayer();
      this.currentRound++;
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 18);
      this.playerHp -= attackValue;
    },

    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25);
      this.monsterHp -= attackValue;
      this.attackPlayer();
      this.currentRound++;
    },
  },
});

app.mount('#game');
