<template>
  <div>
    <div>users</div>
    <ul>
      <li
        v-for="user in data"
        :key="user.id">
        {{ user.first_name }}
      </li>
    </ul>
  </div>

</template>
<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`https://reqres.in/api/users`)
    return data
  },

  data: function() {
    return {}
  },

  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style>
</style>
