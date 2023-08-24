import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { BlockLeader } from '../components/block-leader/BlockLeader';
import { leadersMock } from '../mocks';
import { render } from '@testing-library/react';

describe('BlockLeader', () => {
  const mockProps = { ...leadersMock[0], place: 1 };

  it('should render the component with correct props', () => {
    const { getByAltText, getByText, getByTestId } = render(<BlockLeader {...mockProps} />);

    const avatarImg: any = getByAltText('avatar');
    expect(avatarImg.src).toBe(`https://ya-praktikum.tech/api/v2/resources/${mockProps.avatar}`);

    const usernameText = getByTestId('username').textContent;
    expect(usernameText).toBe(`1. ${mockProps.username}`);

    const pointsText = getByText(mockProps.points.toString()).textContent;
    expect(pointsText).toBe(mockProps.points.toString());

    const container = getByTestId('container');
    expect(container.classList).toContain('Winner');
  });

  it('should not have the "Winner" class when place is not 1', () => {
    const props = { ...mockProps, place: 2 };
    const { getByTestId } = render(<BlockLeader {...props} />);

    const container = getByTestId('container');
    expect(container.classList).not.toContain('Winner');
  });

  it('should render the top place icon when place is 1', () => {
    const { getByTestId } = render(<BlockLeader {...mockProps} />);

    const topPlace = getByTestId('top-place');
    expect(topPlace).toBeDefined();
  });

  it('should not render the top place icon when place is not 1', () => {
    const props = { ...mockProps, place: 2 };
    const { queryByTestId } = render(<BlockLeader {...props} />);

    const topPlace = queryByTestId('top-place');
    expect(topPlace).toBeNull();
  });
});
