import { findAllByRole, getByRole, getByTestId, getByTitle, render, waitForElement } from '@testing-library/react';
import { cleanup } from '@testing-library/react-hooks';
import React from 'react';
import PandasListPage from '.';
import pandas from '../../pandas';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PandasListPage', () => {
  afterEach(cleanup);

  test('should render loading text then list of pandas', async () => {
    mockedAxios.get.mockResolvedValue({ data: pandas });

    const { getByText, container } = render(<PandasListPage />);
    const loadingElement = getByText(/Chargement en cours/i);
    expect(loadingElement).toBeInTheDocument();

    const yuanMeng = await waitForElement(() => getByText('Yuan Meng'), { container });
    expect(yuanMeng).toBeInTheDocument();
    expect(loadingElement).not.toBeInTheDocument();

    const headings = await findAllByRole(container, 'panda');
    expect(headings.length).toBe(pandas.length);
  });

  test('should render loading text then an error message', async () => {
    mockedAxios.get.mockRejectedValue({ message: 'Something went wrong !' });

    const { getByText, container } = render(<PandasListPage />);
    const loadingElement = getByText(/Chargement en cours/i);
    expect(loadingElement).toBeInTheDocument();

    const errorElement = await waitForElement(() => getByTestId(container, 'error'));
    expect(errorElement).toBeInTheDocument();
    expect(loadingElement).not.toBeInTheDocument();
  });
});
