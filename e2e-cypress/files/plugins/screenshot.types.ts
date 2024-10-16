export interface ScreenshotEvidenceData {
  name: string;
  path: string;
  step: number;
  subStep: number;
  takenAt: string;
}

export interface ScreenshotEvidenceResult {
  hash: string;
  path: string;
}
export const isScreenshotEvidenceResult = (candidate: unknown): candidate is ScreenshotEvidenceResult =>
  Boolean(
    typeof candidate === 'object' &&
      candidate &&
      'hash' in candidate &&
      'path' in candidate &&
      typeof candidate.hash === 'string' &&
      typeof candidate.path === 'string',
  );
