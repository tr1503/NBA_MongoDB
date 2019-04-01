<p>db.createView("East_Confs","teams",[{$match:{"teamConf":"East"}}])</p>
<p>db.createView("West_Confs","teams",[{$match:{"teamConf":"West"}}])</p>
<p>east_team: ['CHI','ATL','DET','CLE','NY','ORL','WAS','BKN','BOS','PHI','MIL','CHA','TOR','MIA','IND']</p>
<p>west_team: ['LAC','DEN','GS','POR','NO','MIN','LAL''HOU','OKC','SA','UTA','SAC','DAL','MEM','PHO']</p>
<div>
  用上面两个array create team view，例子：
  db.createView("CHI", "East_Confs", [{$match:{"teamAbbr":"CHI"}}])
  db.createView("LAC", "West_Confs", [{$match:{"teamAbbr":"LAC"}}])
</div>
<div>
  给每个队的standing创建standing view，例子：
  db.createView("CHI_standing", "standings", [{$match:{"teamAbbr":"CHI"}}]
</div>
