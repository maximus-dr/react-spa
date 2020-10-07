import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("Profile Status Component", () => {
    test("status in props should be in the state", () => {
      const component = create(<ProfileStatus status="мой статус" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe('мой статус');
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="мой статус" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation span should contain correct status", () => {
        const component = create(<ProfileStatus status="мой статус" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('мой статус');
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="мой статус" />);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="мой статус" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

    // test("input should be displayed in editMode instead of span", () => {
    //     const component = create(<ProfileStatus status="мой статус" />);
    //     const root = component.root;
    //     let span = root.findByType('span');
    //     span.props.onClick();
    //     let input = root.findByType('input');
    //     expect(input.props.value).toBe('мой статус');
    // });
});