import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectTable from '../ProjectTable.vue'

describe('ProjectTable', () => {
  it('renders the table with the correct number of rows', async () => {
    const projects = [
      {
        id: 1,
        project_name: 'Project 1',
        developer: 'Dev 1',
        main_contractor: 'Contractor 1',
        region: 'Region 1',
        state: 'State 1',
        status: 'Status 1',
        sector: 'Sector 1'
      },
      {
        id: 2,
        project_name: 'Project 2',
        developer: 'Dev 2',
        main_contractor: 'Contractor 2',
        region: 'Region 2',
        state: 'State 2',
        status: 'Status 2',
        sector: 'Sector 2'
      }
    ]

    const wrapper = mount(ProjectTable, {
      props: {
        projects,
        loading: false
      }
    })

    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(2) / expect(rows[0].text()).toContain('Project 1')
    expect(rows[0].text()).toContain('Dev 1')
  })

  it('displays loading message when loading is true', async () => {
    const wrapper = mount(ProjectTable, {
      props: {
        projects: [],
        loading: true
      }
    })

    const loadingMessage = wrapper.find('.loading')
    expect(loadingMessage.exists()).toBe(true)
    expect(loadingMessage.text()).toBe('Loading...')
  })

  it('renders "No projects found" message when there are no projects and loading is false', async () => {
    const wrapper = mount(ProjectTable, {
      props: {
        projects: [],
        loading: false
      }
    })

    const noProjectsMessage = wrapper.find('.empty')
    expect(noProjectsMessage.exists()).toBe(true)
    expect(noProjectsMessage.text()).toBe('No projects found.')
  })

  it('renders project names correctly', async () => {
    const projects = [
      { id: 1, project_name: 'Project 1' },
      { id: 2, project_name: 'Project 2' }
    ]

    const wrapper = mount(ProjectTable, {
      props: {
        projects,
        loading: false
      }
    })

    const projectNames = wrapper.findAll('tbody td:nth-child(1)')
    expect(projectNames.length).toBe(2)
    expect(projectNames[0].text()).toBe('Project 1')
    expect(projectNames[1].text()).toBe('Project 2')
  })
})
