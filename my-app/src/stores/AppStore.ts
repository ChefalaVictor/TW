import { types } from 'mobx-state-tree';

const AppStore = types.model({
    firstName: types.string,
    lastName: types.string,
    group: types.string,
}).actions(self => ({
    setPersonalData(firstName: string, lastName: string, group: string) {
        self.firstName = firstName;
        self.lastName = lastName;
        self.group = group;
    }
}));

const store = AppStore.create({
    firstName: 'Chefala',
    lastName: 'Victor',
    group: 'CR-222'
});

export default store;
