import { Error } from 'fuature/error';
import React from 'react';

type ErrorPageT = {};

export const ErrorPage: React.FC<ErrorPageT> = () => <Error />;
