<template>
  <div>
    <div class="toolbar">
      <!-- Toolbar title -->
      <q-toolbar-title :padding="1">
        {{title}}
      </q-toolbar-title>
      <button>
        <i>mail</i>
      </button>
    </div>
    <div class="layout-padding">
      <div class="floating-label row">
        <input v-model="task" required class="full-width">
        <label>Task</label>
        <button :disabled="task==''" @click="save(), task=''" class="text-primary">
          <i>save</i>
        </button>
      </div>
      <div class="list highlight no-border">
        <div class="item" v-for="l in tasks.data">
          <div class="item-primary">
            <q-checkbox v-model="l.done" @input="update(l)"></q-checkbox>
          </div>
          <div class="item-content has-secondary">
            {{l.details}}
          </div>
          <div class="item-secondary">
            <button @click="removeTask(l._id)" class="small circular negative">
              <i>save</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  mounted () {
    this.findTasks({
      query: {
        $sort: {createdAt: -1}
      }
    })
  },
  data () {
    return {
      title: 'TodoApp',
      task: ''
    }
  },
  computed: {
    ...mapGetters('tasks', {
      findTasksInStore: 'find'
    }),
    tasks () {
      return this.findTasksInStore({query: { $sort: {createdAt: 1} }})
    }
  },
  methods: {
    ...mapActions('tasks', {
      findTasks: 'find',
      createTask: 'create',
      updateTask: 'patch',
      removeTask: 'remove'
    }),
    save () {
      this.createTask({done: false, details: this.task})
    },
    update (l) {
      console.log(l)
      this.updateTask([l._id, {done: l.done}, {}])
    }
  }
}
</script>
