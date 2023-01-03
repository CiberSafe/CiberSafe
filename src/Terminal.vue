<script>
import VueCommand, { createStdout } from "vue-command";
import "/node_modules/vue-command/dist/vue-command.css";
import NanoEditor from "./components/Nano.vue";
import { h } from 'vue';
import { escapeHtml } from '@vue/shared';

export default {
  data: () => {
    return {
      isLoading: true,
      navega: false,
      components: {
    VueCommand,
  },
  
    commands: {
      "hello.world": () => createStdout("\nHello world"),
      nano: () => NanoEditor,
      "help": () => {
          /*const list = ['hello-world\n', 'def.attack$ddos\n', 'Start DDOS\n', 'Start SQL-I\n', 'Start Example\n', 'info\n', 'norris\n']*/
          const list = ['hello.world\n', '@start.quiz\n', 'quiz.help\n', 'info\n', 'exit']
          return createStdout(list)
        },
      /*"def.attack$ddos": () => {*/
        "@start.quiz": () => {
        var ShowBtn = setInterval(() => {
      window.location = '/loading-quiz.html';
      }, 1500)
      return createStdout("Starting Quiz...\n")
      },
      "exit": () => {
        var ShowBtn = setInterval(() => {
      window.location = '/';
      }, 1500)
      return createStdout("Closing...\n")
      },
      "info": () => {
      return createStdout("Projeto CiberSafe:\n Este projeto foi elaborado para a Unidade Curricular de Metodologias de Software\n Mestrado Engenharia Informática -ISEC\n \n \n Autores:\n Gonçalo Santos\n Filipe Silva\n Pedro Sousa\n Guilherme Almeida\n Daniel Santos\n")
      },
      "quiz.help": () => {
      return createStdout("Quiz de suporte aos temas abordados.\nAcerta e ganha prémios.\n \n Começa agora a jogar o Quiz!\nComo Jogar?\n\n ->     @start.quiz\n\n")
      }
    },
    prompt: 'ciber@safe ~$ ',
    }
    
  },
 /* mounted () {
    var ShowBtn = setInterval(() => {
      window.location = '#';
      this.isLoading = false;
      }, 3500) 
  }
*/
};

</script>
<script setup>
import TerminalShow from './TerminalShow.vue'
</script>
<template>
  <div v-if="isLoading" style=""><vue-command  show-help help-text="Introduz 'help'!" :commands="commands" :prompt="prompt" style="height: 50vh; border-radius: 15px; filter: drop-shadow(5px 8px 8px rgba(226, 226, 226, 0.482));"/></div>
  <div v-if="navega"><HomeShow/></diV>
</template>

<style lang="scss">

.vue-command,
.vue-command--invert {
  width: 100%;

  ::-webkit-scrollbar {
    width: 6px;
  }

  .vue-command__bar,
  .vue-command__bar--invert {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .vue-command__history,
  .vue-command__history--invert {
    height: 50vh;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}

.vue-command {
  ::-webkit-scrollbar-track {
    background: #252525;
  }

  ::-webkit-scrollbar-thumb {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
}

.vue-command--invert {
  ::-webkit-scrollbar-track {
    background: #dadada;
  }

  ::-webkit-scrollbar-thumb {
    background: #0e0e0e;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #cccccc;
  }
}
</style>
