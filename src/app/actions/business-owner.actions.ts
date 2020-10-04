import { createAction, props } from '@ngrx/store';

export const loadBusinessOwners = createAction(
  '[BusinessOwner] Load BusinessOwners'
);

export const loadBusinessOwnersSuccess = createAction(
  '[BusinessOwner] Load BusinessOwners Success',
  props<{ data: any }>()
);

export const loadBusinessOwnersFailure = createAction(
  '[BusinessOwner] Load BusinessOwners Failure',
  props<{ error: any }>()
);
