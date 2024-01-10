function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}