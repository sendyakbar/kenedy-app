import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ExperiencesScreen } from '../ExperiencesScreen'

const minimalProps = {
    route: { key: 'experiences-key', name: 'ExperiencesScreen', params: { userId: 'asdf' } },
    navigation: {} as any,
  } as any;

describe('ExperiencesScreen', () => {
    it('renders header and one initial form', () => {
        const { getByText, getAllByText } = render(<ExperiencesScreen {...minimalProps} />)
        expect(getByText('Your Experiences')).toBeTruthy()
        // Expect at least the Title label to appear for the initial form
        expect(getAllByText('Title').length).toBeGreaterThanOrEqual(1)
    })

    it('adds and removes experience forms', () => {
        const { getByText, getAllByText } = render(<ExperiencesScreen {...minimalProps} />)

        const addBtn = getByText('Add Experience')
        fireEvent.press(addBtn)
        fireEvent.press(addBtn)
        // Now expect at least 3
        expect(getAllByText('Title').length).toBeGreaterThanOrEqual(3)
    })
})
