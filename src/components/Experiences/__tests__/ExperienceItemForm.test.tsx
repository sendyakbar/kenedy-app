import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ExperienceItemForm } from '../ExperienceItemForm'
import type { ExperienceFormData } from '../types'

const base: ExperienceFormData = {
    title: '',
    company: '',
    duration: '',
    description: '',
}

describe('ExperienceItemForm', () => {
    it('renders all fields with labels and placeholders', () => {
        const { getByText, getByPlaceholderText } = render(
            <ExperienceItemForm value={base} index={0} onChange={() => {}} />
        )

        expect(getByText('Title')).toBeTruthy()
        expect(getByText('Company')).toBeTruthy()
        expect(getByText('Duration')).toBeTruthy()
        expect(getByText('Description')).toBeTruthy()

        expect(getByPlaceholderText('e.g., Senior Software Engineer')).toBeTruthy()
        expect(getByPlaceholderText('e.g., Tech Corp')).toBeTruthy()
        expect(getByPlaceholderText('e.g., 2 years')).toBeTruthy()
        expect(getByPlaceholderText('Describe your role, responsibilities, and achievements')).toBeTruthy()
    })

    it('calls onChange with correct field and value', () => {
        const onChange = jest.fn()
        const { getByPlaceholderText } = render(
            <ExperienceItemForm value={base} index={2} onChange={onChange} />
        )

        fireEvent.changeText(getByPlaceholderText('e.g., Senior Software Engineer'), 'Staff Engineer')
        expect(onChange).toHaveBeenCalledWith(2, 'title', 'Staff Engineer')

        fireEvent.changeText(getByPlaceholderText('e.g., Tech Corp'), 'Acme Inc')
        expect(onChange).toHaveBeenCalledWith(2, 'company', 'Acme Inc')

        fireEvent.changeText(getByPlaceholderText('e.g., 2 years'), '3 years')
        expect(onChange).toHaveBeenCalledWith(2, 'duration', '3 years')

        fireEvent.changeText(
            getByPlaceholderText('Describe your role, responsibilities, and achievements'),
            'Built cool stuff'
        )
        expect(onChange).toHaveBeenCalledWith(2, 'description', 'Built cool stuff')
    })
})
