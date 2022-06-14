import { NotificationManager } from 'react-notifications';

import { ProgressManager } from '../progress';

import { getAccessToken } from './getAccessToken';

export const downloadFile = (url, { target_format }) => {
  const request = new XMLHttpRequest();

  request.addEventListener('progress', () => {
    // TODO maybe should implement dynamic progress changing
  });

  const hideProgressBar = () => {
    ProgressManager.remove(request.downloadNotification);
  };

  const hideProgressBarWithError = () => {
    hideProgressBar();
    NotificationManager.error('Download error', null, 5000);
  };

  request.addEventListener('error', hideProgressBarWithError);
  request.addEventListener('timeout', hideProgressBarWithError);
  request.addEventListener('abort', hideProgressBarWithError);

  request.addEventListener('loadstart', () => {
    request.downloadNotification = ProgressManager.progress(
      null,
      'Downloading',
      1000_000
    );
  });

  request.addEventListener('load', () => {
    const file = request.response;

    hideProgressBar();
    const fileName = request.getResponseHeader('x-filename');

    const downloadButton = document.createElement('a');

    downloadButton.href = URL.createObjectURL(file);
    downloadButton.download = fileName;
    downloadButton.click();
    NotificationManager.success('Successfully downloaded', null, 5000);
  });

  request.responseType = 'blob';
  const token = getAccessToken();
  const requestUrl = `/aribot-api/v1/${url}?target_format=${target_format}`;

  request.open('GET', requestUrl);
  request.setRequestHeader('Authorization', `Bearer ${token}`);

  request.send();
};
