const Discord = require('discord.js');
const config = require("../../config.json");
const db = require("quick.db");
const {MessageEmbed} = require("discord.js");
const client = global.client;


module.exports = async function(oldUser, newUser) {
    const guild = client.guilds.cache.get(config.Guild.GuildID)
    const role = guild.roles.cache.find(roleInfo => roleInfo.id === config.roles.team)
    const ownerr = client.users.cache.get(config.bot.owner);
    const member = guild.members.cache.get(newUser.id)
    let taglıüye = await guild.members.cache.filter(member => member.user.username.includes(config.registration.GuilDTag)).size
    const embed = new MessageEmbed().setTimestamp().setFooter(`Created by Aden.`, ownerr.avatarURL({ dynamic: true })).setAuthor(" " + newUser.username + " ", newUser.avatarURL())
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(config.registration.GuilDTag) && !newUser.username.includes(config.registration.GuilDTag)) {
            member.roles.remove(config.roles.team)
            client.channels.cache.get(config.logs.taglog).send(`||@everyone|| \n${newUser} isminden \`${config.registration.GuilDTag}\` çıkartarak ailemizden ayrıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: **${oldUser.tag}** - Sonraki kullanıcı adı: **${newUser.tag}**`)
        } else if (!oldUser.username.includes(config.registration.GuilDTag) && newUser.username.includes(config.registration.GuilDTag)) {
            member.roles.add(config.roles.team)
            client.channels.cache.get(config.channels.chat).send(`${newUser} tagımızı (**${config.registration.GuilDTag}**) alarak ailemize katıldı.`)
            client.channels.cache.get(config.logs.taglog).send({ embeds: [embed.setDescription(`${newUser} ismine \`${config.registration.GuilDTag}\` alarak ailemize katıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: \`${oldUser.tag}\` - Sonraki kullanıcı adı: \`${newUser.tag}\``)]})
        }
    }
  
      if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(config.registration.GuilDTag2) && !newUser.username.includes(config.registration.GuilDTag2)) {
            member.roles.remove(config.roles.team)
            client.channels.cache.get(config.logs.taglog).send(`||@everyone|| \n${newUser} isminden \`${config.registration.GuilDTag2}\` çıkartarak ailemizden ayrıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: **${oldUser.tag}** - Sonraki kullanıcı adı: **${newUser.tag}**`)
        } else if (!oldUser.username.includes(config.registration.GuilDTag2) && newUser.username.includes(config.registration.GuilDTag2)) {
            member.roles.add(config.roles.team)
            client.channels.cache.get(config.channels.chat).send(`${newUser} tagımızı (**${config.registration.GuilDTag2}**) alarak ailemize katıldı.`)
            client.channels.cache.get(config.logs.taglog).send({ embeds: [embed.setDescription(`${newUser} ismine \`${config.registration.GuilDTag2}\` alarak ailemize katıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: \`${oldUser.tag}\` - Sonraki kullanıcı adı: \`${newUser.tag}\``)]})
        }
    }
  
        if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(config.registration.GuilDTag3) && !newUser.username.includes(config.registration.GuilDTag3)) {
            member.roles.remove(config.roles.team)
            client.channels.cache.get(config.logs.taglog).send(`||@everyone|| \n${newUser} isminden \`${config.registration.GuilDTag3}\` çıkartarak ailemizden ayrıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: **${oldUser.tag}** - Sonraki kullanıcı adı: **${newUser.tag}**`)
        } else if (!oldUser.username.includes(config.registration.GuilDTag3) && newUser.username.includes(config.registration.GuilDTag3)) {
            member.roles.add(config.roles.team)
            client.channels.cache.get(config.channels.chat).send(`${newUser} tagımızı (**${config.registration.GuilDTag3}**) alarak ailemize katıldı.`)
            client.channels.cache.get(config.logs.taglog).send({ embeds: [embed.setDescription(`${newUser} ismine \`${config.registration.GuilDTag3}\` alarak ailemize katıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: \`${oldUser.tag}\` - Sonraki kullanıcı adı: \`${newUser.tag}\``)]})
        }
    }
  
          if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(config.registration.GuilDTag4) && !newUser.username.includes(config.registration.GuilDTag4)) {
            member.roles.remove(config.roles.team)
            client.channels.cache.get(config.logs.taglog).send(`||@everyone|| \n${newUser} isminden \`${config.registration.GuilDTag4}\` çıkartarak ailemizden ayrıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: **${oldUser.tag}** - Sonraki kullanıcı adı: **${newUser.tag}**`)
        } else if (!oldUser.username.includes(config.registration.GuilDTag4) && newUser.username.includes(config.registration.GuilDTag4)) {
            member.roles.add(config.roles.team)
            client.channels.cache.get(config.channels.chat).send(`${newUser} tagımızı (**${config.registration.GuilDTag4}**) alarak ailemize katıldı.`)
            client.channels.cache.get(config.logs.taglog).send({ embeds: [embed.setDescription(`${newUser} ismine \`${config.registration.GuilDTag4}\` alarak ailemize katıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: \`${oldUser.tag}\` - Sonraki kullanıcı adı: \`${newUser.tag}\``)]})
        }
    }
  
    if (newUser.discriminator !== oldUser.discriminator) {
        if (oldUser.discriminator == config.registration.GuildDiscrim && newUser.discriminator !== config.registration.GuildDiscrim) {
            member.roles.remove(role)
            client.channels.cache.get(config.logs.taglog).send(`||@everyone|| \n${newUser} isminden etiket tagımızı çıkartarak ailemizden ayrıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: **${oldUser.tag}** - Sonraki kullanıcı adı: **${newUser.tag}**`)
        } else if (oldUser.discriminator !== config.registration.GuildDiscrim && newUser.discriminator == config.registration.GuildDiscrim) {
            member.roles.add(role)
            client.channels.cache.get(config.logs.taglog).send({ embeds: [embed.setDescription(`${newUser} etiket tagımızı alarak ailemize katıldı! \n────────────────────────────────────────\nÖnceki kullanıcı adı: \`${oldUser.tag}\` - Sonraki kullanıcı adı: \`${newUser.tag}\``)]})
            client.channels.cache.get(config.channels.chat).send(`${newUser} etiket tagımızı alarak ailemize katıldı.`)
        }
    }
}

module.exports.conf = {
    name: "userUpdate"
}