import { Action } from '../constants/family.constant';
export const employeeReducer = (state, action) => {
    let payload = action.payload
    switch (action.type) {
        case Action.ADD_FAMILY:
            return {
                id: payload.id,
                firstName : payload.firstName,
                lastName : payload.lastName,
                genderID : payload.genderID,
                dob : payload.dob,
                familytypeid: familytypeid,
                selected: false
            }
        case Action.SET_SELECTED_FAMILY:
            return {
                iid: payload.id,
                firstName : payload.firstName,
                lastName : payload.lastName,
                genderID : payload.genderID,
                dob : payload.dob,
                familytypeid: familytypeid,
                selected: true
            }
        default : 
            return state
    }
}