# Generated by Django 3.2 on 2021-05-06 12:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0006_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='related_board',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.board', verbose_name='Имя Борды'),
            preserve_default=False,
        ),
    ]