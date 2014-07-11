Feature: Prisoner transfer to other dungeon
  As a dungeon master
  I want to make prisoner transfer an automated process
  So no important steps get left out

  Scenario: Notifying other dungeons of the transfer
    Given I have a prisoner ready to transfer to another dungeon
    When I initiate the transfer
    Then the other dungeon should receive the prisoner
