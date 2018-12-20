export const apiError = ({ error, feature, sourceAction, meta }) =>
  ({
    type: `${feature} ${sourceAction.ERROR}`,
    payload: { error },
    meta,
  });

export const apiSuccess = ({ res: { data }, feature, sourceAction, meta }) =>
  ({
    type: `${feature} ${sourceAction.SUCCESS}`,
    payload: { data },
    meta,
  });