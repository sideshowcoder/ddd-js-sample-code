var dungeon = {
  orcs: [
    { weapon: { type: "sword" } },
    { weapon: { type: "axe" } },
    { weapon: { type: "hammer" } }
  ]
}

function getOrcWeaponTypes() {
  var result = []
  dungeon.orcs.forEach(function (orc) {
    result.push(orc.weapon.type)
  })
  return result
}

console.log(getOrcWeaponTypes())
