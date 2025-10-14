import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ExperienceItemForm } from '../ExperienceItemForm'
import type { ExperienceFormData } from '../types'

const base: ExperienceFormData = {
    role: '',
    domain: '',
    years: 0,
    skills: '',
    company: '',
    description: '',
}

describe('ExperienceItemForm', () => {
    it('renders all fields with labels and placeholders', () => {
        const { getByText, getByPlaceholderText } = render(
            <ExperienceItemForm value={base} index={0} onChange={() => {}} />
        )

        expect(getByText('Company')).toBeTruthy()
        expect(getByText('Domain')).toBeTruthy()
        expect(getByText('Role')).toBeTruthy()
        expect(getByText('Duration')).toBeTruthy()
        expect(getByText('Description')).toBeTruthy()
        expect(getByText('Skills')).toBeTruthy()

        expect(getByPlaceholderText('e.g., Goto Corp')).toBeTruthy()
        expect(getByPlaceholderText('e.g., Fintech')).toBeTruthy()
        expect(getByPlaceholderText('e.g., Senior Software Engineer')).toBeTruthy()
        expect(getByPlaceholderText('e.g., 2')).toBeTruthy()
        expect(getByPlaceholderText('Describe your role, responsibilities, and achievements')).toBeTruthy()
        expect(getByPlaceholderText('e.g., golang, nodejs, java')).toBeTruthy()
    })

    it('calls onChange with correct field and value', () => {
        const onChange = jest.fn()
        const { getByPlaceholderText } = render(
            <ExperienceItemForm value={base} index={2} onChange={onChange} />
        )

        fireEvent.changeText(getByPlaceholderText('e.g., Goto Corp'), 'Acme Inc')
        expect(onChange).toHaveBeenCalledWith(2, 'company', 'Acme Inc')

        fireEvent.changeText(getByPlaceholderText('e.g., Fintech'), 'E-commerce')
        expect(onChange).toHaveBeenCalledWith(2, 'domain', 'E-commerce')

        fireEvent.changeText(getByPlaceholderText('e.g., Senior Software Engineer'), 'Staff Engineer')
        expect(onChange).toHaveBeenCalledWith(2, 'role', 'Staff Engineer')

        fireEvent.changeText(getByPlaceholderText('e.g., 2'), '3')
        expect(onChange).toHaveBeenCalledWith(2, 'years', '3')

        fireEvent.changeText(
            getByPlaceholderText('Describe your role, responsibilities, and achievements'),
            'Built cool stuff'
        )
        expect(onChange).toHaveBeenCalledWith(2, 'description', 'Built cool stuff')

        fireEvent.changeText(getByPlaceholderText('e.g., golang, nodejs, java'), 'React, TypeScript')
        expect(onChange).toHaveBeenCalledWith(2, 'skills', 'React, TypeScript')
    })

    it('hides Remove for index 0 and shows for index > 0', () => {
        const onRemove = jest.fn()
        const { queryByText, rerender, getByText } = render(
            <ExperienceItemForm value={base} index={0} onChange={() => {}} onRemove={onRemove} />
        )
        expect(queryByText('Remove')).toBeNull()

        rerender(<ExperienceItemForm value={base} index={1} onChange={() => {}} onRemove={onRemove} />)
        const removeBtn = getByText('Remove')
        fireEvent.press(removeBtn)
        expect(onRemove).toHaveBeenCalledWith(1)
    })
})
