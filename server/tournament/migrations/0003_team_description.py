# Generated by Django 4.2.3 on 2023-07-29 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("tournament", "0002_doubleeliminationbracket_match_round_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="team",
            name="description",
            field=models.CharField(max_length=255, null=True),
        ),
    ]
