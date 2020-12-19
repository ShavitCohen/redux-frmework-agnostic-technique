export const apiError = ({ error, sourceAction, meta }) =>
  ({
    type: sourceAction.ERROR,
    payload: { error },
    meta,
  });

export const apiSuccess = ({ res: { data }, sourceAction, meta }) =>
  ({
    type: sourceAction.SUCCESS,
    payload: { data },
    meta,
  });