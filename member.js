function skillsMember() {
  var member = {
    skills: ['JavaScript', 'React', 'Node'],
    addSkill: function(skill) {
      this.skills.push(skill);
    }
  };
  return member;
}