import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectTable from '../ProjectTable.vue'

describe('ProjectTable', () => {
  it('renders properly', () => {
    const wrapper = mount(ProjectTable, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
