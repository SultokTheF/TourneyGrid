from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Match(models.Model):
    name = models.CharField(max_length=100)
    scheduled = models.DateTimeField()
    home_team = models.ForeignKey(Team, related_name='home_matches', on_delete=models.CASCADE)
    home_score = models.IntegerField(default=0)
    visitor_team = models.ForeignKey(Team, related_name='visitor_matches', on_delete=models.CASCADE)
    visitor_score = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.home_team} vs. {self.visitor_team}"


class Round(models.Model):
    name = models.CharField(max_length=100)
    matches = models.ManyToManyField(Match)

    def __str__(self):
        return self.name


class DoubleEliminationBracket(models.Model):
    name = models.CharField(max_length=100)
    upper_bracket_rounds = models.ManyToManyField(Round, related_name='upper_bracket')
    lower_bracket_rounds = models.ManyToManyField(Round, related_name='lower_bracket')

    def __str__(self):
        return self.name
